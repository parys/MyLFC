import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatchService } from "../match.service";
import { Match } from "../match.model";
import { RolesCheckedService } from "@app/shared";

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
                    e => console.log(e));
        };
    }

    public pin(id?: number): void {
        this.matchService.pin(id).subscribe(data => data, e => console.log(e));
    }

    private getTimeRemaining(endtime: Date): Counter {
        let t = Date.parse(endtime.toLocaleString()) - Date.parse(new Date().toLocaleString());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
}

export class Counter {

}