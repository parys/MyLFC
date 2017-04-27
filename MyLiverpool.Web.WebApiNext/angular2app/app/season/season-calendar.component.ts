import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Season } from "./season.model";
import { SeasonService } from "./season.service";

@Component({
    selector: "<season-calendar>",
    templateUrl: "./season-calendar.component.html"
})
export class SeasonCalendarComponent implements  OnInit {
    season: Season;
    id: number;

    constructor(private service: SeasonService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let id = 0;
        if (+this.route.snapshot.params["id"]) {
            id = +this.route.snapshot.params["id"];
        }
        this.service.getSingleWithMatches(id)
            .subscribe(data => this.season = data,
                error => console.log(error));
    }
}