import { Component, OnInit, OnDestroy } from "@angular/core";
import { MdSnackBar } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { NotificationService } from "../notification.service";
import { RolesCheckedService } from "../../shared/index";
import { Configuration } from "../../app.constants";

@Component({
    selector: "notification-counter",
    templateUrl: "./notification-counter.component.html"
})
export class NotificationCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public count: number = 0;

    constructor(private service: NotificationService,
        public roles: RolesCheckedService,
        private snackBar: MdSnackBar,
        private config: Configuration) { }

    public ngOnInit(): void {
        this.updateCount();
        this.scheduleUpdateCount();
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
        if(this.sub2) { this.sub2.unsubscribe(); }
    }

    private scheduleUpdateCount() {
        this.sub2 = Observable.interval(this.config.updateUnreadPmCountTime)
            .map(x => this.updateCount())
            .subscribe();
    }

    private updateCount() {
        this.sub = this.service.getUnreadCount()
            .subscribe(data => {
                this.count = +data;
                if (+data > 0) {
                    this.snackBar.open("У вас есть новые уведомления",
                        null, {  duration: 5000 });
                }
                },
                e => console.log(e));
    }
}