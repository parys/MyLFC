import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";   
import { Observable } from "rxjs/Observable";
import { Pm } from "../pm.model";
import { PmService } from "../pm.service";
import { User, UserService } from "@app/user";

@Component({
    selector: "pm-edit",
    templateUrl: "./pm-edit.component.html"
})
export class PmEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public editPmForm: FormGroup;
    public id: number = 0;
    public debounceTime: number = 600;
    public users$: Observable<User[]>;

    constructor(private service: PmService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) {
    }

    public ngOnInit(): void {
        this.editPmForm = this.formBuilder.group({
            receiverId: [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            receiver: [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            title: [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(50)
                ])
            ],
            message: [
                "", Validators.compose([
                    Validators.required,
                    Validators.maxLength(2500)
                ])
            ]
        });


        this.users$ = this.editPmForm.controls["receiver"].valueChanges
            .debounceTime(this.debounceTime)
            .distinctUntilChanged()
            .switchMap((value: string) => this.userService.getListByUserName(value));
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
    }
    
    public selectUser(id: number) {
        this.editPmForm.get("receiverId").patchValue(id);
    }

    public onSubmit(): void {
        const model: Pm = this.editPmForm.value;

        this.sub = this.service.create(model).subscribe(data => {
                this.editPmForm.patchValue({message: ""});
            },
            e => console.log(e),
            () => {
                //todo add snackbar
            });
    }
}