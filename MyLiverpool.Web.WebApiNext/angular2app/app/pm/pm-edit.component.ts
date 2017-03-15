import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";   
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";

@Component({
    selector: "pm-edit",
    template: require("./pm-edit.component.html")
})
export class PmEditComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
    id: number = 0;
    private sub: Subscription;           
    users = "/api/v1/user/GetUserNames?typed=:keyword";

    constructor(private service: PmService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer) {
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
       // this.getUsername();
    }

    ngOnDestroy() {
      //  this.sub.unsubscribe();
    }

    updateUsername(user: any) {
        if (user) {
            this.editForm.patchValue({ receiver: user.id });
        }
    }

    autocompleteListFormatter = (data: any): SafeHtml => {
        let html = `<span>${data.username}</span>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }


    onSubmit(): void {
        let model = new Pm();
        model.receiverId = this.editForm.controls["receiver"].value;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;

        let res = this.service.create(model).subscribe(data => data);

     //   this.router.navigate(["/pm"]);
    }
}