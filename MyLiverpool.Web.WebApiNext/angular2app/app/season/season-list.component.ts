import { Component, OnInit } from "@angular/core";
import { SeasonService } from "./season.service";
import { Season } from "./season.model";

@Component({
    selector: "<season-list>",
    template: require("./season-list.component.html")
})
export class SeasonListComponent implements OnInit{
    seasons: Season[];

    constructor(private service: SeasonService) {
        
    }

    ngOnInit(): void {
        this.service.getAll().subscribe(data => this.seasons = data,
            error => console.log(error));
    }
}