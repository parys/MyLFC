import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {User} from "./user.model";
import {LocalStorageMine} from "../shared/localStorage";
import {UserService} from "./user.service";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/user-detail.component.html'
})

export class UserDetailComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    item: User;

    constructor(private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.userService.GetSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error),
                () => console.log("success load edit news"));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parse(item: User): void {
        this.item = item;
    }
}