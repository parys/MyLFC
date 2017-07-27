﻿import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/take";
import "rxjs/add/operator/takeUntil";
import { InjuryService } from "./injury.service";
import { Configuration } from "../app.constants";
import { Injury } from "./injury.model";
import { Person } from "../person/index";
import { PersonService } from "../person/person.service";
import { LocalStorageService } from "../shared/index";

@Component({
    selector: "injury-edit",
    templateUrl: "./injury-edit.component.html"
})

export class InjuryEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    private id: number;
    private static changer: Subject<any> = new Subject<any>();
    public editInjuryForm: FormGroup;
    public imagePath: string;
    public persons: string = "/api/v1/person/GetPersonsByName?typed=:keyword";

    constructor(private injuryService: InjuryService,
        private personService: PersonService,
        private route: ActivatedRoute,
        private router: Router,
        private config: Configuration,
        private localStorage: LocalStorageService,
        private formBuilder: FormBuilder) {
    }
    
    public ngOnInit(): void {
        this.initForm();
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
            if (this.id > 0) {
                this.sub2 = this.injuryService.getSingle(this.id)
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
        const injury: Injury = this.parseForm();
        if (this.id > 0) {
            this.injuryService.update(this.id, injury)
                .subscribe(data => this.router.navigate(["/injuries"]),
                    error => console.log(error));
        } else {
            this.injuryService.create(injury)
                .subscribe(data => this.router.navigate(["/injuries"]),
                    error => console.log(error));
        }
    }
    
    public updatePerson(person: any): void {
        if (person) {
            this.editInjuryForm.get("personId").patchValue(person.key);
            this.editInjuryForm.get("personName").patchValue(person.value);
        }
    }

    private getRandomNumber(): number {
        return Math.random();
    }

    private parse(data: Injury): void {
        this.id = data.id;
        this.editInjuryForm.patchValue(data);
    }

    private parseForm(): Injury {
        const item: Injury = this.editInjuryForm.value;
        item.startTime = this.normalizeDate(item.startTime);
        item.endTime = this.normalizeDate(item.endTime);
        item.id = this.id;
        return item;
    }

    private initForm(): void {
        this.editInjuryForm = this.formBuilder.group({
            'personId': ["", Validators.required],
            'personName': ["", Validators.required],
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