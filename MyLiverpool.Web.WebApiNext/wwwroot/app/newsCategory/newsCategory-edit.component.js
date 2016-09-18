"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const newsCategory_model_1 = require("./shared/newsCategory.model");
const newsCategory_service_1 = require("./shared/newsCategory.service");
const router_1 = require('@angular/router');
let NewsCategoryEditComponent = class NewsCategoryEditComponent {
    constructor(service, formBuilder, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.id = 0;
    }
    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'name': [
                '', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ],
            'description': [
                '', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.service
                    .GetSingle(this.id)
                    .subscribe(data => this.editForm.patchValue(data), error => console.log(error), () => console.log("success get  news"));
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onSubmit() {
        let model = new newsCategory_model_1.NewsCategory();
        model.id = this.id;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;
        let res;
        if (this.id > 0) {
            let result = this.service.Update(this.id, model).subscribe(data => res = data);
        }
        else {
            let result = this.service.Add(model).subscribe(data => res = data);
        }
        if (res !== null) {
        }
    }
};
NewsCategoryEditComponent = __decorate([
    core_1.Component({
        selector: 'newsCategory-edit',
        templateUrl: 'app/newsCategory/newsCategory-edit.component.html'
    }), 
    __metadata('design:paramtypes', [newsCategory_service_1.NewsCategoryService, forms_1.FormBuilder, router_1.ActivatedRoute])
], NewsCategoryEditComponent);
exports.NewsCategoryEditComponent = NewsCategoryEditComponent;
//# sourceMappingURL=newsCategory-edit.component.js.map