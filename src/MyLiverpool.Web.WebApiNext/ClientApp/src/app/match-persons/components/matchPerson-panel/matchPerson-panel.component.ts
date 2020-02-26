import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatchPerson } from '@domain/models';
import { MatchPersonTypeEnum } from '@domain/enums/match-person-type.enum';

import { ObserverComponent } from '@domain/base';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';
import { MatchPersonsState, Actions } from '@match-persons/store';
import { GetMatchPersonsListQuery, UpdateMatchPersonCommand } from '@network/shared/match-persons';

@Component({
    selector: 'match-person-panel',
    templateUrl: './matchPerson-panel.component.html',
    styleUrls: ['./matchPerson-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchPersonPanelComponent extends ObserverComponent implements OnInit {
    mpType = MatchPersonTypeEnum;
    @Input() public matchId: number;
    @Input() public isHome: boolean;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    @Select(MatchPersonsState.matchPersons) matchPersons$: Observable<Record<number, GetMatchPersonsListQuery.MatchPersonListDto[]>>;

    @Select(MatchPersonsState.editOptions) editOptions$: Observable<{selected: GetMatchPersonsListQuery.MatchPersonListDto,
        isEdit: boolean,
        mpType: number,
        currentCount: number,
        neededCount: number,
        personTypeId: number}>;

    constructor(private store: Store) {
        super();
    }

    public ngOnInit(): void {
        this.store.dispatch(new Actions.GetMatchPersonsList(this.matchId));
    }

    public addMatchPerson(typeId: number = null, currentCount: number = 0, neededCount: number = 0, personTypeId: number = null): void {
            const action = new Actions.SetEditOptions({
                mpType: typeId,
                currentCount,
                neededCount,
                personTypeId
            });
            this.store.dispatch(action);
    }

    public cancelMatchPersonEdit(): void {
        this.store.dispatch(new Actions.CancelEdit());
    }

    public onSelectPerson(person: MatchPerson): void {
        this.store.dispatch(new Actions.SetSelectedPerson(person));
    }

    public onCreate(person: UpdateMatchPersonCommand.Request) {
        this.store.dispatch(new Actions.UpdateMatchPerson(person));
    }

    public onDelete(person: MatchPerson) {
        this.store.dispatch(new Actions.DeleteMatchPerson(person));
    }

    public trackByFn(_: number, item: MatchPerson) {
        if (!item) { return null; }
        return item.personId;
    }
}
