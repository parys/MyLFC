import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs";
import { Wish } from "../wish.model";
import { WishType } from "../wishType.model";
import { WishState } from "../wishState.model";
import { WishService } from "../wish.service";
import { RolesCheckedService } from "@app/+auth";

@Component({
    selector: "wish-edit",
    templateUrl: "./wish-edit.component.html"
})
export class WishEditComponent implements OnInit, OnDestroy {
    private id: number = 0;
    private sub: Subscription;
    private sub2: Subscription;
    public editWishForm: FormGroup;
    public types: WishType[];
    public states: WishState[];
    public isHuman: boolean = false;

    constructor(private service: WishService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public roles: RolesCheckedService,
        private snackBar: MatSnackBar,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.editWishForm = this.formBuilder.group({
            title: [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(30)
                ])
            ],
            message: ["", Validators.required],
            type: ["", Validators.required],
            state: [1]
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
            if (this.id > 0) {
                this.sub2 = this.service
                    .getSingle(this.id)
                    .subscribe(data => this.editWishForm.patchValue(data),
                    error => console.log(error));
            }
        });
        this.updateTypes();
        this.updateStates();
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
        if(this.sub2) { this.sub2.unsubscribe(); }
    }

    public onSubmit(): void {
        let model: Wish = this.editWishForm.value;
        this.editWishForm.markAsPending();
        model.id = this.id;

        let res: any;
        if (this.id > 0) {
            let result = this.service.update(this.id, model).subscribe(data => res = data);
        } else {
            let result = this.service.create(model).subscribe(data => {
                res = data;
                this.snackBar.open("Пожелание успешно создано", null, { duration: 5000 });
            }, e => {
                console.log(e);
            });
        }
        this.isHuman = false;
        this.router.navigate(["/wishes"]);
    }

    public updateTypes(): void {
        this.service
            .getTypes()
            .subscribe(data => this.types = data);
    }

    public updateStates(): void {
        this.service
            .getStates()
            .subscribe(data => this.states = data);
    }
}