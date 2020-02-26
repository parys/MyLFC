import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { MatchPersonsStateModel } from './match-persons.model';
import { Actions } from './match-persons.actions';

import { MatchPersonService } from '@match-persons/match-person.service';


@State<MatchPersonsStateModel>({
    name: 'matchPersons',
    defaults: {
        matchPersonTypes: [],
        matchPersons: null,
        editOptions: null
    },
})
@Injectable()
export class MatchPersonsState {

    @Selector()
    static matchPersonTypes(state: MatchPersonsStateModel) {
        return state.matchPersonTypes;
    }

    @Selector()
    static matchPersons(state: MatchPersonsStateModel) {
        return state.matchPersons;
    }

    @Selector()
    static editOptions(state: MatchPersonsStateModel) {
        return state.editOptions;
    }

    constructor(private store: Store, protected matchPersonNetwork: MatchPersonService) { }

    @Action(Actions.GetMatchPersonsList)
    onGetMatchesList({ patchState }: StateContext<MatchPersonsStateModel>, { payload }: Actions.GetMatchPersonsList) {

        return this.matchPersonNetwork.getMatchPersons(payload)
            .pipe(
                tap(response => {
                    patchState({ matchPersons: response.results || [] });
                }));
    }


    @Action(Actions.GetMatchPersonTypesList)
    onGetMatchPersonTypesList({ patchState, getState }: StateContext<MatchPersonsStateModel>) {
        const { matchPersonTypes } = getState();
        if (matchPersonTypes.length === 0) {
            return this.matchPersonNetwork.getTypes()
                .pipe(
                    tap(response => { patchState({ matchPersonTypes: response || [] }); }),
                );
        }
    }

    @Action(Actions.UpdateMatchPerson)
    onUpdateMatchPerson({ patchState, getState }: StateContext<MatchPersonsStateModel>, { payload }: Actions.UpdateMatchPerson) {
        const { editOptions } = getState();
        return this.matchPersonNetwork.createOrUpdate(payload)
        .pipe(
            tap(response => {
                editOptions.currentCount++;
                if (this.checkExit(editOptions.neededCount, editOptions.currentCount)) {
                    patchState({ editOptions: null});
                } else {
                    editOptions.selected = null;
                    patchState({ editOptions: {...editOptions}});
                }
        }));
    }

    @Action(Actions.DeleteMatchPerson)
    onDeleteMatchPerson({patchState, getState }: StateContext<MatchPersonsStateModel>, { payload }: Actions.DeleteMatchPerson) {
        const { matchPersons } = getState();
        return this.matchPersonNetwork.delete(payload.matchId, payload.personId)
        .pipe(tap(response => {
            matchPersons[payload.personType] = matchPersons[payload.personType].filter(x => x.personId !== payload.personId);
            patchState({ matchPersons: {...matchPersons} });
        }));
    }

    @Action(Actions.PushMatchPerson)
    onPushMatchPerson({ patchState, getState }: StateContext<MatchPersonsStateModel>, { payload }: Actions.PushMatchPerson) {
        const { matchPersons } = getState();

        matchPersons[payload.type].push(payload);

        patchState({ matchPersons});
    }

    @Action(Actions.SetEditOptions)
    onSetEditOptions({ patchState }: StateContext<MatchPersonsStateModel>, { payload }: Actions.SetEditOptions) {
        this.store.dispatch(new Actions.GetMatchPersonTypesList());
        patchState({ editOptions: {selected: null, ...payload} });
    }

    @Action(Actions.SetSelectedPerson)
    onSetSelectedPerson({ patchState }: StateContext<MatchPersonsStateModel>, { payload }: Actions.SetSelectedPerson) {
        this.store.dispatch(new Actions.GetMatchPersonTypesList());
        patchState({ editOptions: {selected: payload, mpType: null, currentCount: 0, neededCount: 0, personTypeId: null } });
    }

    @Action(Actions.CancelEdit)
    onCancelEdit({ patchState }: StateContext<MatchPersonsStateModel>) {
        patchState({ editOptions: null });
    }

    private checkExit(neededCount: number, currentCount: number): boolean {
        return currentCount === neededCount && neededCount !== 0;
    }
}
