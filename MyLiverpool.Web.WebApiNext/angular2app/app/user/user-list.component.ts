import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";  
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { User} from "./user.model";
import { UserService } from "./user.service";
import { Pageable } from "../shared/pageable.model";
import { UserFilters } from "./userFilters.model";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "user-list",
    template: require("./user-list.component.html")
})

export class UserListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
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
        this.sub = this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
          //  this.categoryId = +params['categoryId'];
          //  this.userName = params['userName'];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
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
        let newUrl = `user/list/${this.page}?`;
     //   if (this.categoryId) {
     //       newUrl = `${newUrl}?categoryId=${this.categoryId}`;
     //   }
     //   if (this.userName) {
     //       newUrl = `${newUrl}${this.categoryId ? "&" : "?"}userName=${this.userName}`;
    //    }

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