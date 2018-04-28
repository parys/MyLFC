import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";
import { DeleteDialogComponent, RolesCheckedService } from "@app/shared";
import { Observable } from "rxjs";
import { MatchEventService } from "../matchEvent.service";
import { MatchEvent } from "../matchEvent.model";
import { Person, PersonService } from "@app/person";
import { Configuration } from "@app/app.constants";

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
        public roles: RolesCheckedService,
        private snackBar: MatSnackBar,
        private dialog: MatDialog) {
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


    public showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        }, e => console.log(e));
    }


    private delete(index: number): void {
        let result: boolean;
        this.matchEventService.delete(this.events[index].id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.events.splice(index, 1);
                        this.snackBar.open("Удалено", null, { duration: 2000 });
                    } else {
                        this.snackBar.open("Ошибка удаления", null, { duration: 2000 });
                    }
                }
            );
    }
}