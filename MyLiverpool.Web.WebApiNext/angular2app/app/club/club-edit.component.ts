import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";
import { ClubService } from "./club.service";
import { Club } from "./club.model";
import { LocalStorageService, RolesCheckedService } from "../shared/index";
import { FileUploader } from "ng2-file-upload/ng2-file-upload";                                    

@Component({
    selector: "club-edit",
    template: require("./club-edit.component.html")
})

export class ClubEditComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
                                                  
    private sub: Subscription;
    id: number;
    item: Club;
    uploadFile: any;
    hasBaseDropZoneOver: boolean = false; 
    uploader: FileUploader;

    constructor(private clubService: ClubService,
        private route: ActivatedRoute,
        private router: Router,
        private localStorage: LocalStorageService,
        private formBuilder: FormBuilder,
        titleService: Title) {
        this.item = new Club();
        titleService.setTitle("Редактирование клуба");
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

        this.editForm.controls["englishName"].valueChanges.subscribe(data => {
            this.updateOptions(data);
        });
    }
    upload() {           
        this.uploader.queue[0].onComplete = (response: string, status: number, headers: any) => {
            this.editForm.controls["logo"].patchValue(response);
        }
        this.uploader.uploadAll();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit() {
        let newsItem = this.parseForm();
        if (this.id > 0) {
            this.clubService.update(this.id, newsItem)
                .subscribe(data => console.log(data.id),//this.router.navigate(["/news", data.id]),
                error => console.log(error),
                () => { });
        } else {
            this.clubService.create(newsItem)
                .subscribe(data => console.log(data.id),//this.router.navigate(["/news", data.id]),
                error => console.log(error),
                () => { });
        }
    }

    getRandomNumber(): number {
        return Math.random();
    }

    private updateOptions(name: string): void {
        this.uploader = new FileUploader({
            url: `/api/v1/upload/clubLogo/${name}`,
            authToken: this.localStorage.getAccessTokenWithType(),
            //  allowedFileType: ["jpg", "jpeg", "png"],
            autoUpload: false

            //        allowedExtensions: ["image/png", "image/jpg"],

        });
    }

    private parse(data: Club): void {
        this.id = data.id;
        this.editForm.patchValue(data);
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