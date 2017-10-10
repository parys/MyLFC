import { Component, OnInit } from "@angular/core";
import { SeasonService } from "../season.service";
import { PersonStatistics } from "../personStatistics.model";

@Component({
    selector: "<season-statistics>",
    templateUrl: "./season-statistics.component.html"
})
export class SeasonStatisticsComponent implements OnInit {
    public statistics: PersonStatistics[];

    constructor(private seasonService: SeasonService) {

    }

    public ngOnInit(): void {//todo add selection of seasons
        this.seasonService.getStatistics(0).subscribe(data => this.statistics = data, e => console.log(e));
    }
}