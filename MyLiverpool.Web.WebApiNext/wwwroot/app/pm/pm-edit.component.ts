import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";     
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";

@Component({
    selector: "pm-edit",
    templateUrl: "app/pm/pm-edit.component.html"
})
export class PmEditComponent implements OnInit, OnDestroy {

    editForm: FormGroup;
    id: number = 0;
    private sub: Subscription;

    constructor(private service: PmService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'title': [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            'message': [
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
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(): void {
        let model = new Pm();
        model.receiverUserName = "admin";                      // todo bagg
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;

        let res;
        if (this.id > 0) {
            let result = this.service.Update(this.id, model).subscribe(data => res = data);
        } else {
            let result = this.service.Create(model).subscribe(data => res = data);
        }
        if (res !== null) {

        }

    }
}