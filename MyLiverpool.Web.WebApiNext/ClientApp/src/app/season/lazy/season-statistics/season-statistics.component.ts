import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSelect, MatSelectChange } from "@angular/material";
import { SeasonService } from "../../season.service";
import { Season } from "../../season.model";
import { PersonStatistics } from "../../personStatistics.model";

@Component({
    selector: "<season-statistics>",
    templateUrl: "./season-statistics.component.html"
})
export class SeasonStatisticsComponent implements OnInit {
    public statistics: PersonStatistics[];
    public seasons: Season[];

    @ViewChild("seasonSelect") seasonSelect: MatSelect;

    constructor(private seasonService: SeasonService) {

    }

    public ngOnInit(): void {//todo add updating url
        this.seasonSelect.selectionChange.subscribe((data: MatSelectChange) => {
            this.update(data.value, false);
        });

        this.seasonService.getAll()
            .subscribe(data => this.seasons = data,
                e => console.log(e));

        this.update(0, true);
    }

    private update(id: number, selectUpdate: boolean): void {
        this.seasonService.getStatistics(id)
            .subscribe(data => {
                this.statistics = data;
                    if (selectUpdate) {
                        this.seasonSelect.value = data;
                    }
                },
                e => console.log(e));
    }
}