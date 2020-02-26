import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { MatchPerson } from '@domain/models';

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
    @Output() public delete = new EventEmitter<MatchPerson>();

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private notifier: NotifierService) {
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
                person.matchId = this.matchId;
                this.delete.emit(person);
            }
        });
        this.subscriptions.push(sub$);
    }
}
