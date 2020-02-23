import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatchPerson, Person, MatchPersonType } from '@domain/models';

import { MatchPersonService } from '@match-persons/match-person.service';
import { MatchPersonsState, GetMatchPersonTypesList } from '@match-persons/store';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
    selector: 'match-person-edit-panel',
    templateUrl: './matchPerson-edit-panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MatchPersonEditPanelComponent implements OnInit {
    @Input() public matchId: number;
    @Input() public selectedMatchPerson: MatchPerson;
    @Input() public typeId: number;
    @Input() public currentCount: number;
    @Input() public neededCount: number;
    @Input() public personTypeId: number;
    @Input() public isHome: boolean;
    @Output() public exit = new EventEmitter();
    public editMatchPersonForm: FormGroup;
    public name: string;
    public isCreation: boolean;

    @Select(MatchPersonsState.matchPersonTypes) types$: Observable<MatchPersonType[]>;

    constructor(private matchPersonService: MatchPersonService,
                private cdr: ChangeDetectorRef,
                private store: Store,
                private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.initForm();

        this.store.dispatch(new GetMatchPersonTypesList());
    }


    public enumSelector(definition: any) {
        return Object.keys(definition)
            .map(key => (new MatchPersonType(+key, definition[key])));
    }

    public onSubmit(): void {
        const matchPerson: MatchPerson = this.parseForm();
        this.matchPersonService.createOrUpdate(matchPerson)
            .subscribe(data => {
                this.selectedMatchPerson = null;
            },
                null,
                () => this.checkExit());
        this.editMatchPersonForm.controls.personId.patchValue('');
        this.name = this.name !== '' ? '' : null ; // dirty hack to change component input
        this.cdr.markForCheck();
    }

    public setPerson(person: Person): void {
        this.editMatchPersonForm.controls.personId.patchValue(person.id);
        this.name = person.personName;
        this.onSubmit();
    }

    private parseForm(): MatchPerson {
        const item: MatchPerson = this.editMatchPersonForm.value;
        item.matchId = this.matchId;
        return item;
    }

    private checkExit(): void {
        this.currentCount++;
        if (this.currentCount === this.neededCount && this.neededCount !== 0) {
            this.exit.emit();
        }
    }

    private initForm(): void {
        this.editMatchPersonForm = this.formBuilder.group({
            personId: [this.selectedMatchPerson ? this.selectedMatchPerson.personId : '', Validators.required],
            personType: [this.selectedMatchPerson ? this.selectedMatchPerson.personType : this.typeId, Validators.required],
            useType: [true],
            isHome: [this.isHome]
        });
        this.name = this.selectedMatchPerson ? this.selectedMatchPerson.personName : '';
    }
}
