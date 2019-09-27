import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatchPerson, Person, MatchPersonType } from '@domain/models';

import { MatchPersonService } from '../match-person.service';

@Component({
    selector: 'match-person-edit-panel',
    templateUrl: './matchPerson-edit-panel.component.html'
})

export class MatchPersonEditPanelComponent implements OnInit {
    public isEdit = false;
    public isCreation = false;
    @Input() public matchId: number;
    @Input() public selectedMatchPerson: MatchPerson;
    @Input() public typeId: number;
    @Input() public currentCount: number;
    @Input() public neededCount: number;
    @Input() public personTypeId: number;
    @Output() public matchPerson = new EventEmitter<MatchPerson>();
    @Output() public exit = new EventEmitter();
    public editMatchPersonForm: FormGroup;

    public types: MatchPersonType[];

    constructor(private matchPersonService: MatchPersonService,
                private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.initForm();

        this.matchPersonService.getTypes()
            .subscribe(data => this.types = data);
    }


    public enumSelector(definition: any) {
        return Object.keys(definition)
            .map(key => (new MatchPersonType(+key, definition[key])));
    }

    public onSubmit(): void {
        const matchPerson: MatchPerson = this.parseForm();
        if (this.isEdit) {
            this.matchPersonService.update(matchPerson)
                .subscribe(data => {
                    matchPerson.number = data.number;
                    this.emitNewPerson(matchPerson);
                },
                    null,
                    () => this.checkExit());
        } else {
            this.matchPersonService.create(matchPerson)
                .subscribe(data => {
                    matchPerson.number = data.number;
                    this.emitNewPerson(matchPerson);
                },
                    null,
                    () => this.checkExit());
        }
        this.editMatchPersonForm.controls.personId.patchValue('');
        this.editMatchPersonForm.controls.personName.patchValue('');
    }

    public setPerson(person: Person): void {
        this.editMatchPersonForm.get('personId').patchValue(person.id);
        this.editMatchPersonForm.get('personName').patchValue(person.personName);
        this.onSubmit();
    }

    private emitNewPerson(matchPerson: MatchPerson): void {
        this.matchPerson.emit(matchPerson);
        this.selectedMatchPerson = null;
    }

    private parseForm(): MatchPerson {
        const item: MatchPerson = this.editMatchPersonForm.value;
        item.matchId = this.matchId;
        return item;
    }

    private checkExit(): void {
        this.currentCount++;
        if (this.currentCount === this.neededCount && this.neededCount !== 0) {
            this.matchPerson.emit(null);
        }
    }

    private initForm(): void {
        this.editMatchPersonForm = this.formBuilder.group({
            personName: [this.selectedMatchPerson ? this.selectedMatchPerson.personName : ''],
            personId: [this.selectedMatchPerson ? this.selectedMatchPerson.personId : '', Validators.required],
            personType: [this.selectedMatchPerson ? this.selectedMatchPerson.personType : this.typeId, Validators.required],
            useType: [true]
        });
        this.isEdit = this.selectedMatchPerson !== undefined;
    }
}
