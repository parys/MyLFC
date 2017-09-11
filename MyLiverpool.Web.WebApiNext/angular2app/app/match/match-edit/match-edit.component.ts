import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/takeUntil";
import { MatchService } from "../match.service";
import { SeasonService, Season } from "../../season/index";
import { Match } from "../match.model";                        
import { MatchType } from "../matchType.model";  
import { Stadium, StadiumService } from "../../stadium/index";
import { Club, ClubService } from "../../club/index";

@Component({
    selector: "match-edit",
    templateUrl: "./match-edit.component.html"
})

export class MatchEditComponent implements OnInit {
    private id: number;
    public editMatchForm: FormGroup;
    public debounceTime: number = 600;
    public types: MatchType[];
    public seasons: Season[];
    public clubs$: Observable<Club[]>;
    public stadiums$: Observable<Stadium[]>;

    constructor(private matchService: MatchService,    
        private route: ActivatedRoute,
        private stadiumService: StadiumService,
        private router: Router,
        private formBuilder: FormBuilder,
        private seasonService: SeasonService,
        private clubService: ClubService) {
    }

    public ngOnInit(): void {
        this.initForm();
        let id = this.route.snapshot.params["id"];
        if(id && id > 0) {
                this.matchService.getSingle(id)
                    .subscribe(data => this.parse(data),
                    error => console.log(error));
            };
        
        this.matchService.getTypes()
            .subscribe(data => this.types = data,
                error => console.log(error));

        this.seasonService.getAll()
            .subscribe(data => this.seasons = data,
            error => console.log(error));
    }

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

    public selectStadium(id: number) {
        this.editMatchForm.get("stadiumId").patchValue(id);
    }

    public selectClub(id: number) {
        this.editMatchForm.get("clubId").patchValue(id);
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
    }

    private initForm(): void {
        this.editMatchForm = this.formBuilder.group({
            'clubName': [""],
            'clubId': ["", Validators.required],
            'seasonId': ["", Validators.required],
            'isHome': ["true", Validators.required],
            'date': [null, Validators.required],
            'time': [null, Validators.required],
            'typeId': ["", Validators.required],
            'stadiumId': ["", Validators.required],
            'stadiumName': ["", Validators.required],
            'reportUrl': [""],
            'photoUrl': [""],
            'videoUrl': [""],
            'scoreHome': [null],
            'scoreAway': [null]
        });

        this.stadiums$ = this.editMatchForm.controls["stadiumName"].valueChanges
            .debounceTime(this.debounceTime)
            .distinctUntilChanged()
            .switchMap((value: string) => this.stadiumService.getListByName(value));

        this.clubs$ = this.editMatchForm.controls["clubName"].valueChanges
            .debounceTime(this.debounceTime)
            .distinctUntilChanged()
            .switchMap((value: string) => this.clubService.getListByName(value));
    }

    private getIdFromUrl(url: string): string {
        if (url) {
            let pieces = url.split("/");
            return pieces[pieces.length - 1];
        }
        return null;
    }
}