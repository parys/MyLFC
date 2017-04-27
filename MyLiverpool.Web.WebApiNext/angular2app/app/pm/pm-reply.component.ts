import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";

@Component({
    selector: "pm-reply",
    templateUrl: "./pm-reply.component.html"
})
export class PmReplyComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
    id: number = 0;
    private sub: Subscription;
    @Input()
    userName: string;
    @Input()
    userId: number;
    @Input()
    title: string;
    @Output()
    close = new EventEmitter();

    constructor(private service: PmService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'title': [
                this.getTitle(), Validators.compose([
                    Validators.required,
                    Validators.maxLength(30)
                ])
            ],
            'message': [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(500)
                ])
            ]
        });

        //this.sub = this.route.params.subscribe(params => {
        //this.id = +params["id"];
        //if (this.id > 0) {
        //    this.service
        //        .GetSingle(this.id)
        //        .subscribe(data => this.editForm.patchValue(data),
        //        error => console.log(error),
        //        () => console.log("success get  news"));
        //}
        //});
        //this.getUsername();
    }

    ngOnDestroy() {
        //  this.sub.unsubscribe();
    }

    onSubmit(): void {
        let model = new Pm();
        model.receiverId = this.userId;
        model.title = this.editForm.controls["title"].value;
        model.message = this.editForm.controls["message"].value;

        let res = this.service.create(model).subscribe(data => {
                if (data) {
                    this.closeWindow();
                }
            },
            error => console.log(error),
            () => {
            });
    }

    closeWindow(): void {
        this.close.emit({});
    }

    private getTitle(): string {
        if (!this.title) {
            return "";
        }
        const match = this.title.match(/\[.*]/);
        if (match) {
            let newValue = parseInt(match[0].substring(1, match[0].length - 1));
            return this.title.replace(/\[.*]/, `[${++newValue}]`);
        } else {
            return `Re[1]: ${this.title}`;
        }
    }
}