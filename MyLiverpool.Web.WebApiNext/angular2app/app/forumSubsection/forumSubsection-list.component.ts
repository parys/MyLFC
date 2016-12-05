import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { ForumSubsectionService } from "./forumSubsection.service";
import { ForumSubsection } from "./forumSubsection.model";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "forumSubsection-list",
    template: require("./forumSubsection-list.component.html")
})

export class ForumSubsectionListComponent implements OnInit {

    items: ForumSubsection[];
    roles: IRoles;

    constructor(private service: ForumSubsectionService, private rolesChecked: RolesCheckedService) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;

        this.service
            .getAll()
            .subscribe(data => this.items = data,
            error => console.log(error),
            () => {});
    }
}