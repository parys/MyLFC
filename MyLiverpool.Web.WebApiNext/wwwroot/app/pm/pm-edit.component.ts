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
    mySource = ["ar1", "ar2", "3dsa"];
    users = "/api/user/GetUserNames?typed=:keyword";

    constructor(private service: PmService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'receiver': [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            'title': [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(30)
                ])
            ],
            'message': [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(500)
                ])
            ]
        });
        //this.sub = this.route.params.subscribe(params => {
            //this.id = +params["id"];
            //if (this.id > 0) {
            //    this.service
            //        .GetSingle(this.id)
            //        .subscribe(data => this.editForm.patchValue(data),
            //        error => console.log(error),
            //        () => console.log("success get  news"));
            //}
        //});
        this.getUsername();
    }

    ngOnDestroy() {
      //  this.sub.unsubscribe();
    }

    updateUsername(user: any) {
        if (user) {
            this.editForm.patchValue({ receiver: user.id });
        }
    }

    getUsername(): void {
        console.log(this.route);
        if (this.route.data["username"]) {
            console.log(this.route.data["username"]);
        }
    }

    onSubmit(): void {
        let model = new Pm();
        model.receiverId = this.editForm.controls["receiver"].value;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;

        let res = this.service.Create(model).subscribe(data => data);

        this.router.navigate(["/pm"]);

    }
}