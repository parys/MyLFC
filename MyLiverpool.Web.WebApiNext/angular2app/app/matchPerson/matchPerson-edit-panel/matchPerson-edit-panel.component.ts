import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { MatchPerson } from "../matchPerson.model";
import { MatchPersonType } from "../matchPersonType.model";
import { PersonService, Person } from "@app/person";
import { Configuration } from "@app/app.constants";
import { MatchPersonService } from "../matchPerson.service";

@Component({
    selector: "matchPerson-edit-panel",
    templateUrl: "./matchPerson-edit-panel.component.html"
})

export class MatchPersonEditPanelComponent implements OnInit {
    public isEdit: boolean = false;
    @Input() public matchId: number;
    @Input() public selectedMatchPerson: MatchPerson;
    @Input() public typeId: number;
    @Output() public matchPerson = new EventEmitter<MatchPerson>();
    public editMatchPersonForm: FormGroup;
    public persons$: Observable<Person[]>;

    public types: MatchPersonType[];

    constructor(private matchPersonService: MatchPersonService,
        private route: ActivatedRoute,
        private personService: PersonService,
        private config: Configuration,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar) {
    }

    public ngOnInit(): void {
        this.initForm();

        this.matchPersonService.getTypes()
            .subscribe(data => this.types = data,
            e => console.log(e));
    }

    public onSubmit(): void {
        const matchPerson: MatchPerson = this.parseForm();
        if (this.isEdit) {
            this.matchPersonService.update(matchPerson)
                .subscribe(data => this.emitNewPerson(data),
                e => console.log(e));
        } else {
            this.matchPersonService.create(matchPerson)
                .subscribe(data => this.emitNewPerson(data),
                e => console.log(e));
        }
    }

    public selectPerson(id: number) {
        this.editMatchPersonForm.get("personId").patchValue(id);
    }

    private emitNewPerson(matchPerson: MatchPerson): void {
        matchPerson.personName = this.editMatchPersonForm.get("personName").value;
        this.matchPerson.emit(matchPerson);
        this.selectedMatchPerson = null;
    }

    private parse(data: MatchPerson): void {
        this.editMatchPersonForm.patchValue(data);
    }

    private parseForm(): MatchPerson {
        const item: MatchPerson = this.editMatchPersonForm.value;
        item.matchId = this.matchId;
        return item;
    }

    private initForm(): void {
        this.editMatchPersonForm = this.formBuilder.group({
            personName: [this.selectedMatchPerson ? this.selectedMatchPerson.personName : "", Validators.required],
            personId: [this.selectedMatchPerson ? this.selectedMatchPerson.personId : "", Validators.required],
            personType: [this.selectedMatchPerson ? this.selectedMatchPerson.personType : this.typeId, Validators.required]
        });
        this.isEdit = this.selectedMatchPerson !== undefined;

        this.persons$ = this.editMatchPersonForm.controls["personName"].valueChanges.pipe(
            debounceTime(this.config.debounceTime),
            distinctUntilChanged(),
            switchMap((value: string) => this.personService.getListByName(value)));
    }
}