import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { Observable, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Poll } from "../../models";
import { PollService } from "../../core";

@Component({
    selector: "poll-edit",
    templateUrl: "./poll-edit.component.html"
})
export class PollEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public editPollForm: FormGroup;
    public item: Poll;

    constructor(private service: PollService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute
    ) {
    }

    public ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            if (+params["id"] === 0) {
                this.item = new Poll();
            } else {
                this.sub2 = this.service.getSingle(+params["id"])
                    .subscribe(data => {
                        this.item = data;
                        this.editPollForm.patchValue(data);
                    },
                        e => console.log(e));
            }
        });
        this.initForm();
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public onSubmit(): void {
        this.item.question = this.editPollForm.get("question").value;

        //this.sub = this.service.create(model).subscribe(data => {
        //    this.editPollForm.patchValue({ message: "" });
        //        this.snackBar.open("Сообщение отправлено.", null, { duration: 5000 });
        //    },
        //    e => console.log(e));
    }

    private initForm(): void {
        this.editPollForm = this.formBuilder.group({
            question: ["", Validators.compose([
                Validators.required,
                Validators.maxLength(100)
            ])],
            startTime: ["", Validators.required],
        });
    }
}