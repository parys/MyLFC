import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Person } from "./person.model";
import { PersonService } from "./person.service";

@Component({
    selector: "<stuff-list>",
    templateUrl: "./stuff-list.component.html"
})
export class StuffListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Person[];

    constructor(private personService: PersonService){
    }

    public ngOnInit(): void {
        this.sub = this.personService.getStuff().subscribe(data => this.items = data,
            e => console.log(e));
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
    }
}