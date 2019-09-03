import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, ElementRef, ViewChild, Input } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AbstractControlComponent, ControlValueProvider } from '@domain/base';
import { PagedList, Person, PersonFilters } from '@domain/models';
import { DEBOUNCE_TIME } from '@constants/app.constants';
import { PersonService } from '@persons/person.service';


@Component({
    selector: 'select-person-form-field',
    templateUrl: './select-person-form-field.component.html',
    styleUrls: ['./select-person-form-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ControlValueProvider(SelectPersonFormFieldComponent)
    ],
})
export class SelectPersonFormFieldComponent extends AbstractControlComponent<number> implements OnInit, ControlValueAccessor {

    @Input() personName: string;
    @ViewChild('selectInput', { static: true }) selectInput: any;
    public persons$: Observable<Person[]>;
    public selectCtrl = new FormControl();

    constructor(private personService: PersonService, protected cdRef: ChangeDetectorRef) {
        super(cdRef);
    }

    ngOnInit(): void {
        this.persons$ = this.selectCtrl.valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME),
            distinctUntilChanged(),
            switchMap((value: string) => {
                const filter = new PersonFilters();
                filter.name = value;
                return this.personService.getAll(filter);
            }),
            switchMap((pagingPersons: PagedList<Person>): Observable<Person[]> => {
                return of(pagingPersons.results);
            }));
    }

    public onSelectionChange(personId: number): void {
        this.value = personId;
    }


}
