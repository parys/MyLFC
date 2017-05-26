import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Wish } from "./wish.model";
import { WishType } from "./wishType.model";
import { WishService } from "./wish.service";

@Component({
    selector: "wish-edit",
    templateUrl: "./wish-edit.component.html"
})
export class WishEditComponent implements OnInit, OnDestroy {
    private id: number = 0;
    private sub: Subscription;
    public editWishForm: FormGroup;
    public types: WishType[];
    public isHuman: boolean = false;

    constructor(private service: WishService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.editWishForm = this.formBuilder.group({
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
                    .getSingle(this.id)
                    .subscribe(data => this.editWishForm.patchValue(data),
                    error => console.log(error),
                    () => {});
            }
        });
        this.updateTypes();
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
    }

    public onSubmit(): void {
        let model: Wish = this.editWishForm.value;
        model.id = this.id;

        let res: any;
        if (this.id > 0) {
            let result = this.service.update(this.id, model).subscribe(data => res = data);
        } else {
            let result = this.service.create(model).subscribe(data => res = data);
        }
        this.isHuman = false;
        this.router.navigate(["/wishes"]);
    }

    public updateTypes(): void {
        this.service
            .getTypes()
            .subscribe(data => this.types = data);
    }
}