import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatchService } from "../match.service";
import { Match } from "../match.model";

@Component({
    selector: "match-detail",
    templateUrl: "./match-detail.component.html"
})

export class MatchDetailComponent implements OnInit {
    public item: Match;

    constructor(private matchService: MatchService,    
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        let id = this.route.snapshot.params["id"];
        if(id) {
            this.matchService.getSingle(id)
                .subscribe(data => this.item = data,
                    error => console.log(error));
        };
    }
}