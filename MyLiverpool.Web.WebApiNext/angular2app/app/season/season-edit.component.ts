import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Season } from "./season.model";
import { SeasonService } from "./season.service";

@Component({
    selector: "season-edit",
    template: require("./season-edit.component.html")
})
export class SeasonEditComponent implements OnInit {
    editForm: FormGroup;
    id: number = 0;

    constructor(private service: SeasonService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'startSeasonYear': ["", Validators.required]
        });
        this.id = +this.route.snapshot.params["id"];
        if (this.id > 0) {
            this.service
                .getSingle(this.id)
                .subscribe(data => this.editForm.patchValue(data),
                    error => console.log(error));
        }
    };
    
    onSubmit(): void {
        let model = new Season();
        model.id = this.id;
        model.startSeasonYear = this.editForm.controls["startSeasonYear"].value;

        let res;
        if (this.id > 0) {
            this.service.update(this.id, model).subscribe(data => res = data);
        } else {
            this.service.create(model).subscribe(data => res = data);
        }
        this.router.navigate(["/season"]);
    }
}