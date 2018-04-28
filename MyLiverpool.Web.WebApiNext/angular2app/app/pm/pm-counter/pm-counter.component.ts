import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { MatSnackBar } from "@angular/material";
import { Subscription, interval } from "rxjs";
import { map } from "rxjs/operators";
import { PmService } from "../pm.service";
import { Configuration } from "@app/app.constants";

@Component({
    selector: "pm-counter",
    templateUrl: "./pm-counter.component.html"
})
export class PmCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public count: number = 0;

    constructor(private pmService: PmService,
        private snackBar: MatSnackBar,
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
        this.sub2 = interval(this.config.updateUnreadPmCountTime).pipe(
            map(x => this.updateCount()))
            .subscribe();
    }

    private updateCount() {
        this.sub = this.pmService.getUnreadCount()
            .subscribe(data => {
                this.count = +data;
                if (+data > 0) {
                    this.snackBar.open("У вас есть непрочитанные личные сообщения",
                        null, {  duration: 5000 });
                }},
                e => console.log(e));
    }
}