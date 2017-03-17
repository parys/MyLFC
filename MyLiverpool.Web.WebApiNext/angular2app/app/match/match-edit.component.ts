import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { MatchService } from "./index";
import { ClubService } from "../club/index";
import { Match } from "./match.model";                        
import { MatchType } from "./matchType.model";                        
import { Club } from "../club/club.model";

@Component({
    selector: "match-edit",
    template: require("./match-edit.component.html")
})

export class MatchEditComponent implements OnInit {
    editForm: FormGroup;
    id: number;
    clubs = "/api/v1/club/GetClubsByName/:keyword";
    types : MatchType[];

    constructor(private matchService: MatchService,      
        private clubService: ClubService,      
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.initForm();
        let id = this.route.snapshot.params["id"];
        if(id && id > 0) {
                this.matchService.getSingle(id)
                    .subscribe(data => this.parse(data),
                    error => console.log(error),
                    () => { });
            };
        
        this.matchService.getTypes()
            .subscribe(data => this.types = data,
            error => console.log(error));

    }

    onSubmit() {
        let match = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, match)
                .subscribe(data => this.router.navigate(["/match"]),
                error => console.log(error),
                () => { });
        } else {
            this.matchService.create(match)
                .subscribe(data => this.router.navigate(["/match"]),
                error => console.log(error),
                () => { });
        }
    }

    updateClub(club: any) {
        if (club) {
            this.editForm.get("clubId").patchValue(club.key);
            this.editForm.get("club").patchValue(club.value);
        }
    }

    autocompleteListFormatter = (data: any): SafeHtml => {
        let html = `<span>${data.value}</span>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }


    private parse(data: Match): void {
        this.id = data.id;
        this.editForm.patchValue(data);
    }

    private parseForm(): Match {
        let item = new Match();
        item.id = this.id;
        item.clubId = this.editForm.controls["clubId"].value;
        item.isHome = this.editForm.controls["isHome"].value;
        let date = this.editForm.controls["date"].value;
        let time = this.editForm.controls["time"].value;
        item.dateTime = new Date(date.getYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
        console.log(date.getFullYear());
        console.log(item.dateTime);
      //?  item.dateTime = this.editForm.controls["dateTime"].value;
        item.typeId = this.editForm.controls["typeId"].value;

        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            'club': [""],
            'clubId': ["", Validators.compose([
                Validators.required])],
            'isHome': ["true", Validators.compose([
                Validators.required])],
            'date': ["", Validators.compose([
                Validators.required])],
            'time': ["", Validators.compose([
                Validators.required])],
            'typeId': ["", Validators.compose([
                Validators.required])]
        });
    }

    //private parseClubs(items: Club[]) {
    //    this.clubs = items;
    //}
}