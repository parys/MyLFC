import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Season } from "../season.model";
import { SeasonService } from "../season.service";
import { RolesCheckedService } from "@app/shared";

@Component({
    selector: "<season-calendar>",
    templateUrl: "./season-calendar.component.html"
})
export class SeasonCalendarComponent implements  OnInit {
    public season: Season;
    private id: number;

    constructor(private service: SeasonService,
        public roles: RolesCheckedService,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {        
        let id: number = 0;
        if (+this.route.snapshot.params["id"]) {
            id = +this.route.snapshot.params["id"];
        }
        this.service.getSingleWithMatches(id)
            .subscribe(data => this.season = data,
                e => console.log(e));
    }
}