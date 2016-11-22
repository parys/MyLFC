import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { User } from "./user.model";                          
import { UserService } from "./user.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "user-detail",
    template: require("./user-detail.component.html")
})

export class UserDetailComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    item: User;
    roles: IRoles;

    constructor(private userService: UserService, private route: ActivatedRoute,
        private rolesChecked: RolesCheckedService) { }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.userService.GetSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error),
                () => {});
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parse(item: User): void {
        this.item = item;
    }
}