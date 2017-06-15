import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { TransferService } from "./transfer.service";
import { PersonService } from "./person.service";
import { Transfer } from "./transfer.model";
import { Person } from "./person.model";
import { Stadium } from "../stadium/index";
import { StadiumService } from "../stadium/stadium.service";

@Component({
    selector: "transfer-edit",
    templateUrl: "./transfer-edit.component.html"
})

export class TransferEditComponent implements OnInit {
    private sub: Subscription;
    private id: number;
    public editTransferForm: FormGroup;
    public clubs: string = "/api/v1/club/GetClubsByName?typed=:keyword";
    public persons: string = "/api/v1/person/GetPersonsByName?typed=:keyword";

    constructor(private transferService: TransferService,    
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private personService: PersonService,
        private sanitizer: DomSanitizer) {
    }

    public ngOnInit(): void {
        this.initForm();
        let id: number;
        this.sub = this.route.params.subscribe(data => id = data["id"], e => console.log(e));
        if(id && id > 0) {
            this.transferService.getSingle(id)
                    .subscribe(data => this.parse(data),
                    error => console.log(error));
            };
        
        //this.personService.().subscribe(data => this.persons = data,
        //    e => console.log(e), () => {
        //        this.filteredStadiums$ = this.editMatchForm.controls["stadiumName"].valueChanges
        //            .startWith(null)
        //            .map((name: string) => this.filterStadiums(name));
        //    });
    }


    //public filterStadiums(val: string) {
    //    return val ? this.stadiums.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
    //        : this.stadiums;
    //}

    public onSubmit(): void {
        let transfer = this.parseForm();
        if (this.id > 0) {
            this.transferService.update(this.id, transfer)
                .subscribe(data => this.router.navigate(["/transfers"]),
                error => console.log(error));
        } else {
            this.transferService.create(transfer)
                .subscribe(data => this.router.navigate(["/transfers"]),
                error => console.log(error));
        }
    }

    public updateClub(club: any): void {
        if (club) {
            this.editTransferForm.get("clubId").patchValue(club.key);
            this.editTransferForm.get("clubName").patchValue(club.value);
        }
    }

    public updatePerson(person: any): void {
        if (person) {
            this.editTransferForm.get("personId").patchValue(person.key);
            this.editTransferForm.get("personName").patchValue(person.value);
        }
    }

    //public selected(id: number) {
    //    this.editMatchForm.get("stadiumId").patchValue(id);
    //}

    public autocompleteListFormatter = (data: any): SafeHtml => {
        let html = `<span>${data.value}</span>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    private parse(data: Transfer): void {
        this.id = data.id;
        this.editTransferForm.patchValue(data);
    }

    private parseForm(): Transfer {
        const item = this.editTransferForm.value;
        item.id = this.id;
        return item;
    }

    private initForm(): void {
        this.editTransferForm = this.formBuilder.group({
            'clubName': [""],
            'clubId': [""],
            'personId': ["", Validators.required],
            'personName': [""],
            'startDate': ["", Validators.required],
            'finishDate': [null],
            'amount': ["", Validators.required],
            'onLoan': ["false", Validators.required],
            'coming': [true, Validators.required],
        });
    }

    private getIdFromUrl(url: string): string {
        if (url) {
            let pieces = url.split("/");
            return pieces[pieces.length - 1];
        }
        return null;
    }
}