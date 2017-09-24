import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MatchEventService } from "../matchEvent.service";
import { MatchEvent } from "../matchEvent.model";
import { Person, PersonService } from "../../person/index";
import { Configuration } from "../../app.constants";
import { RolesCheckedService } from "../../shared/index";

@Component({
    selector: "matchEvent-match-panel",
    templateUrl: "./matchEvent-match-panel.component.html"
})
export class MatchEventMatchPanelComponent implements OnInit {
    @Input() public matchId: number;
    @Input() public isHome: boolean;
    @Input() public seasonId: number;
    @Input() public events: MatchEvent[];
    public persons$: Observable<Person[]>;
    public isEditEvent: boolean = false;
    public selectedEvent: MatchEvent;
    public selectedIndex: number;

    constructor(private matchEventService: MatchEventService,
        private route: ActivatedRoute,
        private personService: PersonService,
        private config: Configuration,
        private router: Router,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        //this.matchEventService.getForMatch(this.matchId)
        //    .subscribe(data => this.events = data,
        //        e => console.log(e));
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