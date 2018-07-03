import { Component, OnInit, OnDestroy } from "@angular/core";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { UserService } from "../user.service";
import { User } from "../user.model";

const USER_BIRTHDAY_KEY = makeStateKey<User[]>("user-birthday");

@Component({
    selector: "user-birthday",
    templateUrl: "./user-birthday.component.html",
    styleUrls: ["./user-birthday.component.scss"]
})
export class UserBirthdayComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: User[];
    public currentUserIndex: number = null;

    constructor(private transferState: TransferState,
        private service: UserService) {
    }

    public ngOnInit(): void {
        const savedData = this.transferState.get(USER_BIRTHDAY_KEY, null);
        if (savedData) {
            this.parse(savedData);
        } else {
            this.sub = this.service.getBirthdays()
                .subscribe(data => {
                    this.parse(data);
                    this.transferState.set(USER_BIRTHDAY_KEY, data);
                },
                    e => console.log(e));
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    public goToPrevious(): void {
        if (this.currentUserIndex === 0) {
            this.currentUserIndex = this.items.length - 1;
        } else {
            this.currentUserIndex -= 1;
        }
    }

    public goToNext(): void {
        if (this.items.length === this.currentUserIndex + 1) {
            this.currentUserIndex = 0;
        } else {
            this.currentUserIndex += 1;
        }
    }

    private parse(list: User[]): void {
        this.items = list;
        if (list.length > 0) {
            this.setRandomIndex();
        }
    }

    private setRandomIndex(): void {
        const rand: number = Math.random() * (this.items.length + 1) - 0.5;
        const intNumber = Math.round(rand);
        this.currentUserIndex = intNumber === this.items.length ? intNumber - 1 : intNumber;
    }
}