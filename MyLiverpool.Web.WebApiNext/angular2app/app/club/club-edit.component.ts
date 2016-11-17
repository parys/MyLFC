import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { ClubService } from "./club.service";
import { Club } from "./club.model";
import { LocalStorageMine, RolesCheckedService } from "../shared/index";                                       

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
    options: Object;
   // categories: NewsCategory[];

    constructor(private clubService: ClubService,
        private route: ActivatedRoute,
        private router: Router,
        private localStorage: LocalStorageMine,
        private formBuilder: FormBuilder) {
        this.item = new Club(); 
        this.updateOptions("default");
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
        //this.matchService.GetAll()
        //    .subscribe(data => this.parseCategories(data),
        //    error => console.log(error),
        //    () => { });
        this.editForm.controls["logo"].valueChanges.subscribe(data => this.updateOptions(data));
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

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.editForm.controls["logo"].patchValue(data);
        }
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
            'englishName': ["123", Validators.compose([
                Validators.required])],
            'logo': ["", Validators.compose([
                Validators.required])],
            'name': ["12", Validators.compose([
                Validators.required])],
            'stadium': ["", Validators.compose([
                Validators.required])]
        });
    }

    private updateOptions(name: string): void {
        this.options = {
          //  filterExtensions: true,
            allowedExtensions: ["image/png", "image/jpg"],
            url: `/api/v1/upload/clubLogo/${name}`,
            authToken: this.localStorage.getObject("access_token"),
            authTokenPrefix: "Bearer"
        }
    }

    //private parseCategories(items: NewsCategory[]) {
    //    this.categories = items;
    //}
}