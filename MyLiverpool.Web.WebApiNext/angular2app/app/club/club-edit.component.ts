import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";
import { ClubService } from "./club.service";
import { Club } from "./club.model";
import { LocalStorageService, RolesCheckedService } from "../shared/index";

@Component({
    selector: "club-edit",
    templateUrl: "./club-edit.component.html"
})

export class ClubEditComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
    private sub: Subscription;
    id: number;
    item: Club;
    imagePath: string;

    constructor(private clubService: ClubService,
        private route: ActivatedRoute,
        private router: Router,
        private localStorage: LocalStorageService,
        private formBuilder: FormBuilder) {
        this.item = new Club();
    }

    ngOnInit() {
        this.initForm();
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            if (id > 0) {
                this.clubService.getSingle(id)
                    .subscribe(data => this.parse(data),
                    error => console.log(error),
                    () => { });
            }
        });
    }

    upload() {

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit() {
        let club = this.parseForm();
        if (this.id > 0) {
            this.clubService.update(this.id, club)
                .subscribe(data => this.router.navigate(["/clubs"]),
                error => console.log(error),
                () => { });
        } else {
            this.clubService.create(club)
                .subscribe(data => this.router.navigate(["/clubs"]),
                error => console.log(error),
                () => { });
        }
    }

    onUploadImage(event: any) {
        if (event.currentTarget.files.length > 0) {
            this.clubService.uploadLogo(event.currentTarget.files[0], this.editForm.controls["englishName"].value)
                .subscribe(result => {
                    this.imagePath = result + "?" + this.getRandomNumber();
                    this.editForm.controls["logo"].patchValue(this.imagePath);
                },
                error => console.log(error),
                () => { });
        }
    }

    getRandomNumber(): number {
        return Math.random();
    }

    private parse(data: Club): void {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.imagePath = data.logo;
    }

    private parseForm(): Club {
        let item = new Club();
        item.id = this.id;
        item.englishName = this.editForm.controls["englishName"].value;
        item.logo = this.editForm.controls["logo"].value;
        item.name = this.editForm.controls["name"].value;
        item.stadium = this.editForm.controls["stadium"].value;

        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            'englishName': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])],
            'logo': ["", Validators.compose([
                Validators.required])],
            'name': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])],
            'stadium': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])]
        });
    }
}