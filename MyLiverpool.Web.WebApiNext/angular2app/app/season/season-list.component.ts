import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { SeasonService } from "./season.service";
import { Season } from "./season.model";

@Component({
    selector: "<season-list>",
    templateUrl: "./season-list.component.html"
})
export class SeasonListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public seasons: Season[];

    constructor(private service: SeasonService) {
        
    }

    public ngOnInit(): void {
        this.sub = this.service.getAll().subscribe(data => this.seasons = data,
            error => console.log(error));
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
    }
}