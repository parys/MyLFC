import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { ForumSubsectionService } from "./forumSubsection.service";
import { ForumSubsection } from "./forumSubsection.model";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "forumSubsection-list",
    template: require("./forumSubsection-list.component.html")
})

export class ForumSubsectionListComponent implements OnInit, OnDestroy  {

    item: ForumSubsection;
    roles: IRoles;
    private sub: Subscription;
    page: number = 1;
    itemsPerPage = 15;
    totalItems: number;
                                   
    constructor(private service: ForumSubsectionService, private rolesChecked: RolesCheckedService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;

        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.service.getSingleWithThemes(id, this.page)
                .subscribe(data => this.item = data,
                error => console.log(error),
                () => { })});
        };

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}