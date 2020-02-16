import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatchEvent } from '@domain/models';

import { MatchEventService } from '@match-events/matchEvent.service';
import { Observable } from 'rxjs';
import { AuthState } from '@auth/store';
import { Select } from '@ngxs/store';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';

@Component({
    selector: 'match-event-match-panel',
    templateUrl: './matchEvent-match-panel.component.html',
    styleUrls: ['./matchEvent-match-panel.component.scss']
})
export class MatchEventMatchPanelComponent extends ObserverComponent implements OnInit {
    @Input() public matchId: number;
    @Input() public isHome: boolean;
    @Input() public seasonId: number;
    public events: MatchEvent[];
    public isEditEvent = false;
    public isHomeEdit = false;
    public selectedIndex: number;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private matchEventService: MatchEventService,
                private snackBar: MatSnackBar,
                private notifier: NotifierService) {
                    super();
    }

    public ngOnInit(): void {
        this.matchEventService.getMatchEvents(this.matchId)
            .subscribe(data => this.events = data);
    }

    public addEvent(home: boolean): void {
        this.isEditEvent = true;
        this.isHomeEdit = home;
    }

    public cancelEventEdit(): void {
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
        this.selectedIndex = index;
        this.isEditEvent = true;
    }


    public showDeleteModal(index: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
        this.subscriptions.push(sub$);
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
