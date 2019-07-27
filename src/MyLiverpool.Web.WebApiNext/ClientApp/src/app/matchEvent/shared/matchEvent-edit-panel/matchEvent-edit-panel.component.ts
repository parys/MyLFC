﻿import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { MatchEventService } from "../../core";
import { MatchEvent, MatchEventType } from "@app/matchEvent/models";
import { Person, PersonService, PersonFilters } from "@app/person";
import { DEBOUNCE_TIME } from "@app/+constants";
import { PagedList } from "@app/shared";

@Component({
    selector: "matchEvent-edit-panel",
    templateUrl: "./matchEvent-edit-panel.component.html",
})

export class MatchEventEditPanelComponent implements OnInit {
    public id: number = 0;
    @Input() public matchId: number;
    @Input() public seasonId: number;
    @Input() public selectedEvent: MatchEvent;
    @Output() public matchEvent = new EventEmitter<MatchEvent>();
    public editMatchEventForm: FormGroup;
    public persons$: Observable<Person[]>;
    
    public types: MatchEventType[];

    constructor(private matchEventService: MatchEventService,
        private personService: PersonService,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.initForm();
        
        this.matchEventService.getTypes()
            .subscribe(data => this.types = data);
    }

    public onSubmit(): void {
        const matchEvent: MatchEvent = this.parseForm();
        if (this.id > 0) {
            this.matchEventService.update(this.id, matchEvent)
                .subscribe(data => this.emitNewEvent(matchEvent));
        } else {
            this.matchEventService.create(matchEvent)
                .subscribe((data: number) => {
                    matchEvent.id = data;
                    this.emitNewEvent(matchEvent);
                });
        }
    }
    
    public selectPerson(id: number) {
        this.editMatchEventForm.get("personId").patchValue(id);
    }

    private emitNewEvent(event: MatchEvent): void {
        event.russianName = this.editMatchEventForm.get("russianName").value;
        this.matchEvent.emit(event);
    }
    
    private parse(data: MatchEvent): void {
        this.id = data.id;
        this.editMatchEventForm.patchValue(data);
    }

    private parseForm(): MatchEvent {
        const item: MatchEvent = this.editMatchEventForm.value;
        item.id = this.id;
        item.matchId = this.matchId;
        item.seasonId = this.seasonId;
        return item;
    }

    private initForm(): void {
        this.editMatchEventForm = this.formBuilder.group({
            russianName: [this.selectedEvent ? this.selectedEvent.russianName : "", Validators.required],
            personId: [this.selectedEvent ? this.selectedEvent.personId : "", Validators.required],
            type: [this.selectedEvent ? this.selectedEvent.type : "", Validators.required],
            minute: [this.selectedEvent ? this.selectedEvent.minute : "", Validators.required],
            isOur: [this.selectedEvent ? this.selectedEvent.isOur : false]
        });
        this.id = this.selectedEvent ? this.selectedEvent.id : 0;

        this.persons$ = this.editMatchEventForm.controls["russianName"].valueChanges.pipe(
                debounceTime(DEBOUNCE_TIME),
                distinctUntilChanged(),
                switchMap((value: string) => {
                    const filter = new PersonFilters();
                    filter.name = value;
                    filter.matchId = this.matchId;
                    return this.personService.getAll(filter);
                }),
                switchMap((pagingPersons: PagedList<Person>): Observable<Person[]> => {
                    return of(pagingPersons.results);
                }));
    }
}