import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
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
        this.sub = this.pmService.getUnreadCount()
            .subscribe(data => {
                this.count = +data;
                if (+data > 0) {
                    this.snackBar.open("У вас есть непрочитанные личные сообщения",
                        null, {  duration: 5000 });
                }
                },
                e => console.log(e));
    }
}