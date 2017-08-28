import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { LoanService } from "./loan.service";
import { Configuration } from "../../app.constants";
import { Loan } from "./loan.model";

@Component({
    selector: "loan-edit",
    templateUrl: "./loan-edit.component.html"
})

export class LoanEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    private id: number;
    public editLoanForm: FormGroup;
    public persons: string = "/api/v1/person/GetPersonsByName?typed=:keyword";
    public clubs: string = "/api/v1/club/GetClubsByName?typed=:keyword";

    constructor(private loanService: LoanService,
        private route: ActivatedRoute,
        private router: Router,
        private config: Configuration,
        private sanitizer: DomSanitizer,
        private formBuilder: FormBuilder) {
    }
    
    public ngOnInit(): void {
        this.initForm();
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
            if (this.id > 0) {
                this.sub2 = this.loanService.getSingle(this.id)
                    .subscribe(data => this.parse(data),
                        error => console.log(error));
            }
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public onSubmit(): void {
        const loan: Loan = this.parseForm();
        if (this.id > 0) {
            this.loanService.update(this.id, loan)
                .subscribe(data => this.router.navigate(["/loans"]),
                    error => console.log(error));
        } else {
            this.loanService.create(loan)
                .subscribe(data => this.router.navigate(["/loans"]),
                    error => console.log(error));
        }
    }
    
    public updatePerson(person: any): void {
        if (person) {
            this.editLoanForm.get("personId").patchValue(person.key);
            this.editLoanForm.get("personName").patchValue(person.value);
        }
    }

    public updateClub(club: any): void {
        if (club) {
            this.editLoanForm.get("clubId").patchValue(club.key);
            this.editLoanForm.get("clubName").patchValue(club.value);
        }
    }

    public autocompleteListFormatter = (data: any): SafeHtml => {
        const html: string = `<span>${data.value}</span>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }


    private getRandomNumber(): number {
        return Math.random();
    }

    private parse(data: Loan): void {
        this.id = data.id;
        this.editLoanForm.patchValue(data);
    }

    private parseForm(): Loan {
        const item: Loan = this.editLoanForm.value;
        item.startTime = this.normalizeDate(item.startTime);
        item.endTime = this.normalizeDate(item.endTime);
        item.id = this.id;
        return item;
    }

    private initForm(): void {
        this.editLoanForm = this.formBuilder.group({
            'personId': ["", Validators.required],
            'personName': ["", Validators.required],
            'clubId': ["", Validators.required],
            'clubName': ["", Validators.required],
            'startTime': ["", Validators.required],
            'endTime': ["", Validators.required],
            'description': ["", Validators.required],
            'id': [0, Validators.required]
        });
    }

    private normalizeDate(date: Date): Date {
        if (date) {
            date = new Date(date);
            date = new Date(date.setHours(date.getHours() +
                (-1) * date.getTimezoneOffset() / 60));
        }
        return date;
    }
}