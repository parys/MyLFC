import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { MatchService } from "./match.service";
import { Match } from "./match.model";
import { NewsCategoryService } from "../newsCategory/shared/newsCategory.service";
import { NewsCategory } from "../newsCategory/shared/newsCategory.model";

@Component({
    selector: "match-edit",
    template: require("./match-edit.component.html")
})

export class MatchEditComponent implements OnInit, OnDestroy {
    editForm: FormGroup;

    private sub: Subscription;
    id: number;
    categories: NewsCategory[];

    constructor(private matchService: MatchService,      
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            if (id > 0) {
                this.matchService.getSingle(id)
                    .subscribe(data => this.parse(data),
                    error => console.log(error),
                    () => { });
            }
        });
        //this.matchService.GetAll()
        //    .subscribe(data => this.parseCategories(data),
        //    error => console.log(error),
        //    () => { });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit() {
        let newsItem = this.parseForm();
        if (this.id > 0) {
            this.matchService.update(this.id, newsItem)
                .subscribe(data => console.log(data.id),//this.router.navigate(["/news", data.id]),
                error => console.log(error),
                () => { });
        } else {
            this.matchService.create(newsItem)
                .subscribe(data => console.log(data.id),//this.router.navigate(["/news", data.id]),
                error => console.log(error),
                () => { });
        }
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
        item.dateTime = this.editForm.controls["dateTime"].value;
        item.typeId = this.editForm.controls["typeId"].value;

        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            'clubId': ["", Validators.compose([
                Validators.required])],
            'isHome': ["", Validators.compose([
                Validators.required])],
            'dateTime': ["", Validators.compose([
                Validators.required])],
            'typeId': ["", Validators.compose([
                Validators.required])]
        });
    }

    private parseCategories(items: NewsCategory[]) {
        this.categories = items;
    }
}