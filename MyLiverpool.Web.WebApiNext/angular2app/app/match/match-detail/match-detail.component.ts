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
//private id: number;
  //  public editMatchForm: FormGroup;
   // public clubs: string = "/api/v1/club/GetClubsByName?typed=:keyword";
  //  public types: MatchType[];
  //  public seasons: Season[];
  //  public stadiums: Stadium[];
    public item: Match;
    //public filteredStadiums$: Observable<Stadium[]>;

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
/*
    public onSubmit(): void {
        let match = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, match)
                .subscribe(data => this.router.navigate(["/matches"]),
                    error => console.log(error));
        } else {
            this.matchService.create(match)
                .subscribe(data => this.router.navigate(["/matches"]),
                    error => console.log(error));
        }
    }

    public updateClub(club: any): void {
        if (club) {
            this.editMatchForm.get("clubId").patchValue(club.key);
            this.editMatchForm.get("clubName").patchValue(club.value);
        }
    }

    public selected(id: number) {
        this.editMatchForm.get("stadiumId").patchValue(id);
    }

    public autocompleteListFormatter = (data: any): SafeHtml => {
        let html = `<span>${data.value}</span>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    private parse(data: Match): void {
        this.id = data.id;
        this.editMatchForm.patchValue(data);
        this.editMatchForm.get("date").patchValue(new Date(data.dateTime));
        this.editMatchForm.get("time").patchValue(new Date(data.dateTime).toTimeString().slice(0, 8));
    }

    private parseForm(): Match {
        const item = this.editMatchForm.value;
        item.id = this.id;
        let date = this.editMatchForm.controls["date"].value;
        let time = this.editMatchForm.controls["time"].value;
        item.dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.slice(0, 2), time.slice(3, 5));
        return item;
    }*/

}