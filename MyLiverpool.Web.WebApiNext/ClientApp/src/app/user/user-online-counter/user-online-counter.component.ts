import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";  
import { interval, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "../+core";
import { IUserOnline } from "../user-online.model";
import { Configuration } from "@app/app.constants";

@Component({
    selector: "user-online-counter",
    templateUrl: "./user-online-counter.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOnlineCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public allCount: number = 0;
    public guestCount: number = 0;
    public users: IUserOnline[] = new Array();

    constructor(private userService: UserService,
        private cd: ChangeDetectorRef,
        @Inject(PLATFORM_ID) private platformId: Object,
        private config: Configuration) { }

    public ngOnInit(): void {
        this.updateCount();
        if (isPlatformBrowser(this.platformId)) {
            this.scheduleUpdateCount();
        }
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
        if(this.sub2) { this.sub2.unsubscribe(); }
    }

    private scheduleUpdateCount() {
        this.sub2 = interval(this.config.updateUserOnline).pipe(
            map(x => this.updateCount()))
            .subscribe();
    }

    private updateCount() {
        this.sub = this.userService.getOnlineCount()
            .subscribe(data => {
                    this.allCount = data.allCount;
                    this.guestCount = data.guestCount;
                    this.users = data.users;
                    this.cd.markForCheck();
                },
                e => console.log(e));
    }
}