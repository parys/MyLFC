import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MatchEventService } from "../matchEvent.service";
import { MatchEvent } from "../matchEvent.model";                        
import { MatchEventType } from "../matchEventType.model";
import { Person, PersonService } from "../../person/index";
import { Configuration } from "../../app.constants";

@Component({
    selector: "matchEvent-match-panel",
    templateUrl: "./matchEvent-match-panel.component.html"
})

export class MatchEventMatchPanelComponent implements OnInit {
    public id: number = 0;
    @Input() public matchId: number;
    @Input() public seasonId: number;
   // @Output() public matchEvent = new EventEmitter<MatchEvent>();
    public editMatchEventForm: FormGroup;
    public persons$: Observable<Person[]>;
    public isEditEvent: boolean = true;
    public events: MatchEvent[];

    constructor(private matchEventService: MatchEventService,    
        private route: ActivatedRoute,
        private personService: PersonService,
        private config: Configuration,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
      //  this.initForm();
        this.matchEventService.getForMatch(this.matchId)
            .subscribe(data => this.events = data,
                e => console.log(e));
    }

    public addEvent(): void {
        this.isEditEvent = true;
    }

    public cancelEventEdit(): void {
        this.isEditEvent = false;
    }

    //public onSubmit(): void {
    //    const matchEvent: MatchEvent = this.parseForm();
    //    if (this.id > 0) {
    //        this.matchEventService.update(this.id, matchEvent)
    //            .subscribe(data => {},
    //            e => console.log(e));
    //    } else {
    //        this.matchEventService.create(matchEvent)
    //            .subscribe(data => {},
    //            e => console.log(e));
    //    }
    //}
    
    //public selectPerson(id: number) {
    //    this.editMatchEventForm.get("personId").patchValue(id);
    //}
    
    //private parse(data: MatchEvent): void {
    //    this.id = data.id;
    //    this.editMatchEventForm.patchValue(data);
    //}

    //private parseForm(): MatchEvent {
    //    const item: MatchEvent = this.editMatchEventForm.value;
    //    item.id = this.id;
    //    item.matchId = this.matchId;
    //    item.seasonId = this.seasonId;
    //    if (!this.editMatchEventForm.get("our").value) {
    //        item.personId = null;
    //    }
    //    return item;
    //}

    //private initForm(): void {
    //    this.editMatchEventForm = this.formBuilder.group({
    //        'personName': ["", Validators.required],
    //        'personId': [""],
    //        'type': ["", Validators.required],
    //        'minute': [0, Validators.required],
    //        'our': []
    //    });

    //    this.persons$ = this.editMatchEventForm.controls["personName"].valueChanges
    //        .debounceTime(this.config.debounceTime)
    //        .distinctUntilChanged()
    //        .switchMap((value: string) => this.personService.getListByName(value));
    //}
}