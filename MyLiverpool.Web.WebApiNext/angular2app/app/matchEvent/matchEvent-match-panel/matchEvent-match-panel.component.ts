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
    @Input() public isHome: boolean;
    @Input() public seasonId: number;
    public editMatchEventForm: FormGroup;
    public persons$: Observable<Person[]>;
    public isEditEvent: boolean = false;
    public events: MatchEvent[];
    public selectedEvent: MatchEvent;
    public selectedIndex: number;

    constructor(private matchEventService: MatchEventService,
        private route: ActivatedRoute,
        private personService: PersonService,
        private config: Configuration,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.matchEventService.getForMatch(this.matchId)
            .subscribe(data => this.events = data,
                e => console.log(e));
    }

    public addEvent(): void {
        this.isEditEvent = true;
    }

    public cancelEventEdit(): void {
        this.selectedEvent = null;
        this.isEditEvent = false;
        this.selectedIndex = null;
    }

    public updateEvent(event: MatchEvent) {
        console.log(event);
        if (this.selectedIndex) {
            this.events[this.selectedIndex] = event;
        } else {
            this.events.push(event);
        }

        this.cancelEventEdit();
    }

    public selectEvent(index: number): void {
        this.selectedEvent = this.events[index];
        this.selectedIndex = index;
        this.isEditEvent = true;
    }
}