import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeleteDialogComponent } from '@app/shared';
import { RolesCheckedService } from '@app/+auth';
import { MatchEventService } from '../../core';
import { MatchEvent } from '@domain/models';

@Component({
    selector: 'matchEvent-match-panel',
    templateUrl: './matchEvent-match-panel.component.html',
    styleUrls: ['./matchEvent-match-panel.component.scss']
})
export class MatchEventMatchPanelComponent implements OnInit {
    @Input() public matchId: number;
    @Input() public isHome: boolean;
    @Input() public seasonId: number;
    public events: MatchEvent[];
    public isEditEvent = false;
    public selectedEvent: MatchEvent;
    public selectedIndex: number;

    constructor(private matchEventService: MatchEventService,
        public roles: RolesCheckedService,
        private snackBar: MatSnackBar,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.matchEventService.getMatchEvents(this.matchId)
            .subscribe(data => this.events = data);
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
        });
    }


    private delete(index: number): void {
        this.matchEventService.delete(this.events[index].id)
            .subscribe(res => {
                    if (res) {
                        this.events.splice(index, 1);
                        this.snackBar.open('Удалено');
                    } else {
                        this.snackBar.open('Ошибка удаления');
                    }
                });
    }
}