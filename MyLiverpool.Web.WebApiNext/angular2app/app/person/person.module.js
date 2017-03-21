"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var person_list_component_1 = require("./person-list.component");
var person_edit_component_1 = require("./person-edit.component");
var person_service_1 = require("./person.service");
var player_statistics_component_1 = require("./player-statistics.component");
var person_routes_1 = require("./person.routes");
var index_1 = require("../shared/index");
var datepicker_1 = require("ng2-bootstrap/datepicker");
var PersonModule = (function () {
    function PersonModule() {
    }
    return PersonModule;
}());
PersonModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            datepicker_1.DatepickerModule.forRoot(),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(person_routes_1.personRoutes),
            index_1.SharedModule
        ],
        declarations: [
            person_edit_component_1.PersonEditComponent,
            person_list_component_1.PersonListComponent,
            player_statistics_component_1.PlayerStatisticsComponent
        ],
        exports: [],
        providers: [
            person_service_1.PersonService
        ]
    })
], PersonModule);
exports.PersonModule = PersonModule;
//# sourceMappingURL=person.module.js.map