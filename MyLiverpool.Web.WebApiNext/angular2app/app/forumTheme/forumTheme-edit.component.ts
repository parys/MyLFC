import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ForumTheme } from "./forumTheme.model";
import { ForumSubsectionService, ForumSubsection } from "../forumSubsection/index";
import { ForumThemeService } from "./forumTheme.service";

@Component({
    selector: "forumTheme-edit",
    template: require("./forumTheme-edit.component.html")
})
export class ForumThemeEditComponent implements OnInit, OnDestroy {

    editForm: FormGroup;
    id: number = 0;
    private sub: Subscription;
    forumSubsections: ForumSubsection[];

    constructor(private service: ForumThemeService, private formBuilder: FormBuilder, private route: ActivatedRoute, private subsectionService: ForumSubsectionService) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'subsectionId': [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            'name': [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            'description': [
                "", Validators.compose([
                    Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
            if (this.id > 0) {
                this.service
                    .getSingle(this.id)
                    .subscribe(data => this.editForm.patchValue(data),
                    error => console.log(error),
                    () => { });
            }
        });
        this.subsectionService.getAll()
            .subscribe(data => this.forumSubsections = data,
            error => console.log(error),
            () => { });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(): void {
        let model = new ForumTheme();
        model.id = this.id;
        model.subsectionId = this.editForm.controls["subsectionId"].value;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;

        let res;
        if (this.id > 0) {
            let result = this.service.update(this.id, model).subscribe(data => res = data);
        } else {
            let result = this.service.create(model).subscribe(data => res = data);
        }
        if (res !== null) {

        }

    }
}