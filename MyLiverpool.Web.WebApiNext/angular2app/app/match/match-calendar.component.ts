import { Component, OnInit,OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { MatchService } from "./match.service";
import { Match } from "./match.model";

@Component({
    selector: "match-calendar",
    template: require("./match-calendar.component.html")
})
export class MatchCalendarComponent implements OnInit, OnDestroy {
    last: Match;
    next: Match;
subscription: Subscription;

    constructor(private service: MatchService) {}

    ngOnInit(): void {
        this.subscription = this.service.getForCalendar().subscribe(data => {
                if (data.length === 1) {
                    if (data[0].scoreHome) {
                        this.last = data[0];
                    } else {
                        this.next = data[0];
                    }
                } else {
                    [this.last, this.next] = data;
                }
            },
            error => console.log(error));;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}