import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";  
import { Router, ActivatedRoute } from "@angular/router";
import { User} from "./user.model";
import { UserService } from "./user.service";
import { UserFilters } from "./userFilters.model";
import { Pageable, RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "user-list",
    template: require("./user-list.component.html")
})

export class UserListComponent implements OnInit {
    items: User[];
    roles: IRoles;
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;
    userName: string;
    selectedUserId: number;

    constructor(private userService: UserService,
        private location: Location,
        private rolesChecked: RolesCheckedService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.page = +this.route.snapshot.params["page"] || 1;
        this.userName = this.route.snapshot.params["userName"] || "";
        this.update();
    }

    writePm(index: number): void {
        this.selectedUserId = index;
    }

    closePmWindow(event: any): void {
        this.selectedUserId = null;
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `users?page=${this.page}`;

        if (this.userName) {
            newUrl = `${newUrl}&userName=${this.userName}`;
        }

        this.location.replaceState(newUrl);
    };

    update() {
        let filters = new UserFilters();
      //  filters.categoryId = this.categoryId;
      //  filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;

        this.userService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => {});
    }

    private parsePageable(pageable: Pageable<User>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
}