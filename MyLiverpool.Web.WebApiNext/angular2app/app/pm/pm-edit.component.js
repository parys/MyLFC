var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";
export var PmEditComponent = (function () {
    function PmEditComponent(service, formBuilder, route, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.mySource = ["ar1", "ar2", "3dsa"];
        this.users = "/api/user/GetUserNames?typed=:keyword";
    }
    PmEditComponent.prototype.ngOnInit = function () {
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
        this.getUsername();
    };
    PmEditComponent.prototype.ngOnDestroy = function () {
    };
    PmEditComponent.prototype.updateUsername = function (user) {
        if (user) {
            this.editForm.patchValue({ receiver: user.id });
        }
    };
    PmEditComponent.prototype.getUsername = function () {
        console.log(this.route);
        if (this.route.data["username"]) {
            console.log(this.route.data["username"]);
        }
    };
    PmEditComponent.prototype.onSubmit = function () {
        var model = new Pm();
        model.receiverId = this.editForm.controls["receiver"].value;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;
        var res = this.service.Create(model).subscribe(function (data) { return data; });
        this.router.navigate(["/pm"]);
    };
    PmEditComponent = __decorate([
        Component({
            selector: "pm-edit",
            template: require("./pm-edit.component.html")
        }), 
        __metadata('design:paramtypes', [PmService, FormBuilder, ActivatedRoute, Router])
    ], PmEditComponent);
    return PmEditComponent;
}());
//# sourceMappingURL=pm-edit.component.js.map