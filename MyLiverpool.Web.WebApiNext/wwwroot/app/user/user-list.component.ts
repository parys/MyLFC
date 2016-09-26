import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {User} from "./user.model";
import {UserService} from "./user.service";
import {Pageable} from "../shared/pageable.model";
import {UserFilters} from "./userFilters.model";

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/user-list.component.html'
})

export class UserListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    items: User[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    categoryId: number;
    userName: string;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['page']) {
                this.page = +params['page'];
            }
          //  this.categoryId = +params['categoryId'];
          //  this.userName = params['userName'];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parsePageable(pageable: Pageable<User>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    update() {
        let filters = new UserFilters();
      //  filters.categoryId = this.categoryId;
      //  filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;

        this.userService
            .GetAll(filters)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => console.log("success load list news"));
    }
}