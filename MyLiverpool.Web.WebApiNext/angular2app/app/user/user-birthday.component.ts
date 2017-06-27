import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { UserService } from "./user.service";
import { User } from "./user.model";

@Component({
    selector: "user-birthday",
    templateUrl: "./user-birthday.component.html"
})
export class UserBirthdayComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: User[];

    constructor(private service: UserService) {
    }

    public ngOnInit(): void {
        this.sub = this.service.getBirthdays()
            .subscribe(data => this.parse(data),
                error => console.log(error));
    }

    public ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    private parse(list: User[]): void {
        this.items = list;
    }
}