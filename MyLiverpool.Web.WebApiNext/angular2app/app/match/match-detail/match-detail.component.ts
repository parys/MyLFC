import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/startWith";
import { MatchService } from "../match.service";
import { SeasonService } from "../../season/index";
import { Match } from "../match.model";                        
import { MatchType } from "../matchType.model";  
import { Season } from "../../season/season.model";
import { Stadium } from "../../stadium/index";
import { StadiumService } from "../../stadium/stadium.service";

@Component({
    selector: "match-detail",
    templateUrl: "./match-detail.component.html"
})

export class MatchDetailComponent implements OnInit {
    public item: Match;

    constructor(private matchService: MatchService,    
        private route: ActivatedRoute,
        private stadiumService: StadiumService,
        private router: Router,
        private formBuilder: FormBuilder,
        private seasonService: SeasonService,
        private sanitizer: DomSanitizer) {
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