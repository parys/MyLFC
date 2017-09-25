import { Component, OnInit } from "@angular/core";
import { MatchService } from "../match.service";
import { Match } from "../match.model";

@Component({
    selector: "match-header",
    templateUrl: "./match-header.component.html"
})

export class MatchHeaderComponent implements OnInit {
    public item: Match;

    constructor(private matchService: MatchService) {
    }

    public ngOnInit(): void {
            this.matchService.getHeaderMatch()
                .subscribe(data => this.item = data,
                    e => console.log(e));
        };
    
}