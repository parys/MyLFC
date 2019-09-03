import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { InjuryService } from '@injuries/injury.service';
import { Injury } from '@domain/models';
import { INJURIES_ROUTE } from '@constants/index';
@Component({
    selector: 'injury-edit',
    templateUrl: './injury-edit.component.html'
})

export class InjuryEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    private id: number;
    public editInjuryForm: FormGroup;
    public imagePath: string;

    constructor(private injuryService: InjuryService,
                private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.initForm();
        this.sub = this.route.params.subscribe(params => {
            this.id = +params.id;
            if (this.id > 0) {
                this.sub2 = this.injuryService.getSingle(this.id)
                    .subscribe((data: Injury) => this.parse(data));
            }
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public onSubmit(): void {
        const injury: Injury = this.parseForm();
        this.injuryService.createOrUpdate(this.id, injury)
            .subscribe(() => this.router.navigate([INJURIES_ROUTE]));
    }

    private parse(data: Injury): void {
        this.id = data.id;
        data.startTime = new Date(data.startTime);
        if (data.endTime) {
            data.endTime = new Date(data.endTime);
        }
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
            personId: ['', Validators.required],
            personName: [''],
            startTime: [null, Validators.required],
            endTime: [null],
            description: ['', Validators.required],
            id: [0, Validators.required]
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
