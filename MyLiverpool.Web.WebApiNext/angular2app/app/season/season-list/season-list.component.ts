import { Component, OnInit } from "@angular/core";
import { SeasonService } from "../season.service";
import { Season } from "../season.model";

@Component({
    selector: "<season-list>",
    templateUrl: "./season-list.component.html"
})
export class SeasonListComponent implements OnInit {
    public seasons: Season[];

    constructor(private service: SeasonService) {
    }

    public ngOnInit(): void {     
        this.service.getAll().subscribe(data => this.seasons = data,
            e => console.log(e));
    }
}