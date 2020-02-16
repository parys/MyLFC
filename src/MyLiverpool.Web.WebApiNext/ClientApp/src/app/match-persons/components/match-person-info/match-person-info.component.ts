import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatchPerson } from '@domain/models';

import { MatchPersonService } from '@match-persons/match-person.service';
import { ObserverComponent } from '@domain/base';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';

@Component({
    selector: 'match-person-info',
    templateUrl: './match-person-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchPersonInfoComponent extends ObserverComponent {
    @Input() public person: MatchPerson;
    @Input() public isHome: boolean;
    @Input() public isPlayer: boolean;
    @Input() public matchId: number;
    @Output() public selected: EventEmitter<MatchPerson> = new EventEmitter<MatchPerson>();

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private matchPersonService: MatchPersonService,
                private snackBar: MatSnackBar,
                private notifier: NotifierService) {
        super();
    }
    public onSelectPerson(person: MatchPerson): void {
        this.selected.emit(person);
    }

    public showDeleteModal(person: MatchPerson): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.delete(person);
            }
        });
        this.subscriptions.push(sub$);
    }


    private delete(person: MatchPerson): void {
        const sub$ = this.matchPersonService.delete(this.matchId, person.personId)
            .subscribe((result: boolean) => {
                if (result) {
                    this.person = null;
                    this.snackBar.open('Удалено');
                } else {
                    this.snackBar.open('Ошибка удаления');
                }
            });
        this.subscriptions.push(sub$);
    }
}
