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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("./index");
var index_2 = require("../club/index");
var match_model_1 = require("./match.model");
var MatchEditComponent = (function () {
    function MatchEditComponent(matchService, clubService, route, router, formBuilder, sanitizer) {
        var _this = this;
        this.matchService = matchService;
        this.clubService = clubService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.clubs = "/api/v1/club/GetClubsByName/:keyword";
        this.autocompleteListFormatter = function (data) {
            var html = "<span>" + data.value + "</span>";
            return _this.sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    MatchEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        var id = this.route.snapshot.params["id"];
        if (id && id > 0) {
            this.matchService.getSingle(id)
                .subscribe(function (data) { return _this.parse(data); }, function (error) { return console.log(error); }, function () { });
        }
        ;
        this.matchService.getTypes()
            .subscribe(function (data) { return _this.types = data; }, function (error) { return console.log(error); });
    };
    MatchEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var match = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, match)
                .subscribe(function (data) { return _this.router.navigate(["/match"]); }, function (error) { return console.log(error); }, function () { });
        }
        else {
            this.matchService.create(match)
                .subscribe(function (data) { return _this.router.navigate(["/match"]); }, function (error) { return console.log(error); }, function () { });
        }
    };
    MatchEditComponent.prototype.updateClub = function (club) {
        if (club) {
            this.editForm.get("clubId").patchValue(club.key);
            this.editForm.get("club").patchValue(club.value);
        }
    };
    MatchEditComponent.prototype.parse = function (data) {
        this.id = data.id;
        this.editForm.patchValue(data);
    };
    MatchEditComponent.prototype.parseForm = function () {
        var item = new match_model_1.Match();
        item.id = this.id;
        item.clubId = this.editForm.controls["clubId"].value;
        item.isHome = this.editForm.controls["isHome"].value;
        var date = this.editForm.controls["date"].value;
        var time = this.editForm.controls["time"].value;
        item.dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
        console.log(date.getFullYear());
        console.log(item.dateTime);
        item.typeId = this.editForm.controls["typeId"].value;
        return item;
    };
    MatchEditComponent.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            'club': [""],
            'clubId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'isHome': ["true", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'date': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'time': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            'typeId': ["", forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
    };
    return MatchEditComponent;
}());
MatchEditComponent = __decorate([
    core_1.Component({
        selector: "match-edit",
        template: require("./match-edit.component.html")
    }),
    __metadata("design:paramtypes", [index_1.MatchService,
        index_2.ClubService,
        router_1.ActivatedRoute,
        router_1.Router,
        forms_1.FormBuilder,
        platform_browser_1.DomSanitizer])
], MatchEditComponent);
exports.MatchEditComponent = MatchEditComponent;
//# sourceMappingURL=match-edit.component.js.map