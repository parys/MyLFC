import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MatchEventService } from "../matchEvent.service";
import { MatchEvent } from "../matchEvent.model";                        
import { MatchEventType } from "../matchEventType.model";
import { Person, PersonService } from "../../person/index";
import { Configuration } from "../../app.constants";

@Component({
    selector: "matchEvent-edit-panel",
    templateUrl: "./matchEvent-edit-panel.component.html",
})

export class MatchEventEditPanelComponent implements OnInit {
    public id: number = 0;
    @Input() public matchId: number;
    @Input() public seasonId: number;
    @Output() public matchEvent = new EventEmitter<MatchEvent>();
    public editMatchEventForm: FormGroup;
    public persons$: Observable<Person[]>;
    
    public types: MatchEventType[];

    constructor(private matchEventService: MatchEventService,    
        private route: ActivatedRoute,
        private personService: PersonService,
        private config: Configuration,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.initForm();
        //let id = this.route.snapshot.params["id"];
        //if(id && id > 0) {
        //        this.matchService.getSingle(id)
        //            .subscribe(data => this.parse(data),
        //            error => console.log(error));
        //    };
        
        this.matchEventService.getTypes()
            .subscribe(data => this.types = data,
                e => console.log(e));
    }

    public onSubmit(): void {
        const matchEvent: MatchEvent = this.parseForm();
        if (this.id > 0) {
            this.matchEventService.update(this.id, matchEvent)
                .subscribe(data => {},
                e => console.log(e));
        } else {
            this.matchEventService.create(matchEvent)
                .subscribe(data => {},
                e => console.log(e));
        }
    }
    
    public selectPerson(id: number) {
        this.editMatchEventForm.get("personId").patchValue(id);
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
        console.warn(this.editMatchEventForm.get("our").value);
        if (!this.editMatchEventForm.get("our").value) {
            item.personId = null;

        }
        return item;
    }

    private initForm(): void {
        this.editMatchEventForm = this.formBuilder.group({
            personName: ["", Validators.required],
            personId: [""],
            type: ["", Validators.required],
            minute: [0, Validators.required],
            our: [false]
        });

        this.persons$ = this.editMatchEventForm.controls["personName"].valueChanges
            .debounceTime(this.config.debounceTime)
            .distinctUntilChanged()
            .switchMap((value: string) => this.personService.getListByName(value)).do(() => {
                this.editMatchEventForm.controls["our"].patchValue(true);
            });


    }
}