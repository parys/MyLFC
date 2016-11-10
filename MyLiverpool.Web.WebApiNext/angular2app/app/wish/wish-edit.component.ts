import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Wish } from "./wish.model";
import { WishType } from "./wishType.model";
import { WishService } from "./wish.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "wish-edit",
    template: require("./wish-edit.component.html")
})
export class WishEditComponent implements OnInit, OnDestroy {

    editForm: FormGroup;
    id: number = 0;
    private sub: Subscription;
    types: WishType[];

    constructor(private service: WishService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'message': [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(30)
                ])
            ],
            'title': [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(300)
                ])
            ],
            'type': [
                "", Validators.compose([
                    Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
            if (this.id > 0) {
                this.service
                    .GetSingle(this.id)
                    .subscribe(data => this.editForm.patchValue(data),
                    error => console.log(error),
                    () => console.log("success get  news"));
            }
        });
        this.updateTypes();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(): void {
        let model = new Wish();
        model.id = this.id;
        model.message = this.editForm.controls["message"].value;
        model.title = this.editForm.controls["title"].value;
        model.type = this.editForm.controls["type"].value; 

        let res;
        if (this.id > 0) {
            let result = this.service.Update(this.id, model).subscribe(data => res = data);
        } else {
            let result = this.service.Create(model).subscribe(data => res = data);
        }

        this.router.navigate(["/wish"]);
    }

    updateTypes() {
        this.service
            .GetTypes()
            .subscribe(data => this.types = data);
    }
}