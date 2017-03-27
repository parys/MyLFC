import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { MatchService } from "./index";
import { SeasonService } from "../season/index";
import { Match } from "./match.model";                        
import { MatchType } from "./matchType.model";  
import { Season } from "../season/season.model";

@Component({
    selector: "match-edit",
    template: require("./match-edit.component.html")
})

export class MatchEditComponent implements OnInit {
    editForm: FormGroup;
    id: number;
    clubs = "/api/v1/club/GetClubsByName/:keyword";
    types: MatchType[];
    seasons: Season[];

    constructor(private matchService: MatchService,    
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private seasonService: SeasonService,
        private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
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

    onSubmit() {
        let match = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, match)
                .subscribe(data => this.router.navigate(["/match"]),
                error => console.log(error));
        } else {
            this.matchService.create(match)
                .subscribe(data => this.router.navigate(["/match"]),
                error => console.log(error));
        }
    }

    updateClub(club: any) {
        if (club) {
            this.editForm.get("clubId").patchValue(club.key);
            this.editForm.get("clubName").patchValue(club.value);
        }
    }

    autocompleteListFormatter = (data: any): SafeHtml => {
        let html = `<span>${data.value}</span>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    private parse(data: Match): void {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.editForm.get("date").patchValue(new Date(data.dateTime));
        this.editForm.get("time").patchValue(new Date(data.dateTime));
    }

    private parseForm(): Match {
        let item = new Match();
        item.id = this.id;
        item.clubId = this.editForm.controls["clubId"].value;
        item.isHome = this.editForm.controls["isHome"].value;
        let date = this.editForm.controls["date"].value;
        let time = this.editForm.controls["time"].value;
        item.dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
        item.typeId = this.editForm.controls["typeId"].value;
        item.seasonId = this.editForm.controls["seasonId"].value;

        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            'clubName': [""],
            'clubId': ["", Validators.required],
            'seasonId': ["", Validators.required],
            'isHome': ["true", Validators.required],
            'date': ["", Validators.required],
            'time': ["", Validators.required],
            'typeId': ["", Validators.required]
        });
    }
}