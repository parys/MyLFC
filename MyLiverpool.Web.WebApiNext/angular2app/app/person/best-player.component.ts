import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { PersonService } from "./person.service";
import { Person } from "./person.model";

@Component({
    selector: "best-player",
    template: require("./best-player.component.html")
})
export class BestPlayerComponent implements OnInit, OnDestroy {
    item: Person;
    subscription: Subscription;

    constructor(private service: PersonService) { }

    ngOnInit(): void {
        this.subscription = this.service.getBestPlayer()
            .subscribe(data => this.item = data, error => console.log(error));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}