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

    constructor(private matchService: MatchEventService,    
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
        
        //this.matchService.getTypes()
        //    .subscribe(data => this.types = data,
        //        error => console.log(error));
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
        const item = this.editMatchEventForm.value;
        item.id = this.id;
     //   let date = this.editMatchEventForm.controls["date"].value;
     //   let time = this.editMatchEventForm.controls["time"].value;
    //    item.dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.slice(0, 2), time.slice(3, 5));
        return item;
    }

    private initForm(): void {
        this.editMatchEventForm = this.formBuilder.group({
            'personName': ["", Validators.required],
            'personId': ["", Validators.required],
      //      'seasonId': ["", Validators.required],
      //      'isHome': ["true", Validators.required],
      // //     'date': ["", Validators.required],
      ////      'time': ["", Validators.required],
      //      'typeId': ["", Validators.required],
      //      'stadiumId': ["", Validators.required],
      //      'stadiumName': ["", Validators.required],
        });

        this.persons$ = this.editMatchEventForm.controls["personName"].valueChanges
            .debounceTime(this.config.debounceTime)
            .distinctUntilChanged()
            .switchMap((value: string) => this.personService.getListByName(value));
    }

    //private getIdFromUrl(url: string): string {
    //    if (url) {
    //        let pieces = url.split("/");
    //        return pieces[pieces.length - 1];
    //    }
    //    return null;
    //}
}