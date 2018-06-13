import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../+core";
import { IUserOnline } from "@app/+common-models";
import { Configuration } from "@app/app.constants";
import { SignalRService } from "@app/shared";

@Component({
    selector: "user-online-counter",
    templateUrl: "./user-online-counter.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOnlineCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public allCount: number = 0;
    public guestCount: number = 0;
    public users: IUserOnline[] = new Array();

    constructor(private userService: UserService,
        private cd: ChangeDetectorRef,
        private signalRService: SignalRService,
        private config: Configuration) { }

    public ngOnInit(): void {
        this.updateCount();
        this.signalRService.onlineSubject
            .subscribe(data => this.parse(data),
            e => console.log(e));
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
    }

    private updateCount() {
        this.sub = this.userService.getOnlineCount()
            .subscribe(data => {
                    this.parse(data);
                },
                e => console.log(e));
    }

    private parse(data: any): void {
        this.allCount = data.allCount;
        this.guestCount = data.guestCount;
        this.users = data.users;
        this.cd.markForCheck();
    }
}