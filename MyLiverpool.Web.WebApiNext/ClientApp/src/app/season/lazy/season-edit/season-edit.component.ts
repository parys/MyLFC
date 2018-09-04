import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Season } from "../../season.model";
import { SeasonService } from "../../season.service";
import { SEASONS_ROUTE } from "../../../routes.constants";

@Component({
    selector: "season-edit",
    templateUrl: "./season-edit.component.html"
})
export class SeasonEditComponent implements OnInit, OnDestroy {
    private sub2: Subscription;
    public editForm: FormGroup;
    public id: number;

    constructor(private service: SeasonService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute) {
    }

    public ngOnInit() : void {
        this.editForm = this.formBuilder.group({
            startSeasonYear: ["", Validators.required]
        });
        this.id = this.route.snapshot.params["id"] || 0;
        if (this.id > 0) {
            this.sub2 = this.service
                .getSingle(this.id)
                .subscribe(data => this.editForm.patchValue(data),
                    e => console.log(e));
        }
    };

    public ngOnDestroy(): void {
        if(this.sub2) { this.sub2.unsubscribe(); }
    }

    public onSubmit(): void {
        const model: Season = this.editForm.value;
        model.id = this.id;

        let res: Season;
        if (this.id > 0) {
            this.service.update(this.id, model).subscribe((data: Season) => res = data);
        } else {
            this.service.create(model).subscribe(data => res = data);
        }
        this.router.navigate([SEASONS_ROUTE]);
    }
}