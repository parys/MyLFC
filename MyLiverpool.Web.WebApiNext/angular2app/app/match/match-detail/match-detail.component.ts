import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatchService } from "../match.service";
import { Match } from "../match.model";
import {RolesCheckedService} from "../../shared/index";

@Component({
    selector: "match-detail",
    templateUrl: "./match-detail.component.html"
})

export class MatchDetailComponent implements OnInit {
    public item: Match;

    constructor(private matchService: MatchService,    
        public roles: RolesCheckedService,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        if(id) {
            this.matchService.getSingle(id)
                .subscribe(data => this.item = data,
                    error => console.log(error));
        };
    }

    public pin(id?: number): void {
        this.matchService.pin(id).subscribe(data => data, e => console.log(e));
    }
}