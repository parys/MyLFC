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
                [this.last, this.next] = data;
            },
            error => console.log(error));;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}