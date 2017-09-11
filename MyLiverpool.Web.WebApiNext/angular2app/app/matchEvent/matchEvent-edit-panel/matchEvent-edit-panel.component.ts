import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/switchMap";
import { MatchEventService } from "../matchEvent.service";
import { MatchEvent } from "../matchEvent.model";                        
import { MatchEventType } from "../matchEventType.model";
import { Person, PersonService } from "../../person/index";
import { Configuration } from "../../app.constants";

@Component({
    selector: "matchEvent-edit-panel",
    templateUrl: "./matchEvent-edit-panel.component.html"
})

export class MatchEventEditPanelComponent implements OnInit {
    public id: number = 0;
    @Input() public matchId: number;
    @Input() public seasonId: number;
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
        //let match = this.parseForm();
        //if (this.id > 0) {
        //    this.matchService.update(this.id, match)
        //        .subscribe(data => this.router.navigate(["/matches"]),
        //        error => console.log(error));
        //} else {
        //    this.matchService.create(match)
        //        .subscribe(data => this.router.navigate(["/matches"]),
        //        error => console.log(error));
        //}
    }
    
    public selectPerson(id: number) {
        this.editMatchEventForm.get("personId").patchValue(id);
    }
    
    private parse(data: MatchEvent): void {
        this.id = data.id;
        this.editMatchEventForm.patchValue(data);
     //   this.editMatchForm.get("date").patchValue(new Date(data.dateTime));
     //   this.editMatchForm.get("time").patchValue(new Date(data.dateTime).toTimeString().slice(0, 8));
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
            'personName': ["", Validators.required],
            'personId': ["", Validators.required],
            'minute': [0, Validators.required],
            'our': [, Validators.required]
        });

        this.persons$ = this.editMatchEventForm.controls["personName"].valueChanges
            .debounceTime(this.config.debounceTime)
            .distinctUntilChanged()
            .switchMap((value: string) => this.personService.getListByName(value));
    }
}