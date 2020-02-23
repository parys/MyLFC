import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { State, Action, StateContext, Selector } from '@ngxs/store';


import { NoticeMessage } from '@notices/shared';
import { ShowNotice } from '@notices/store';

import { MatchesStateModel } from './matches.model';
import {
    GetMatchesList,
    ChangeSort,
    ChangePage,
    GetMatchById,
    SetMatchesFilterOptions,
    GetMatchTypesList
} from './matches.actions';

import { GetMatchesListQuery, GetMatchDetailQuery } from '@network/shared/matches';
import { MatchService } from '@matches/match.service';


@State<MatchesStateModel>({
    name: 'matches',
    defaults: {
        matches: [],
        match: null,
        request: new GetMatchesListQuery.Request({ currentPage: 1, pageSize: 15, sortDirection: 'desc', sortOn: 'lastModified' }),
        matchTypes: []
    },
})
@Injectable()
export class MatchesState {

    @Selector()
    static match(state: MatchesStateModel) {
        return state.match;
    }

    @Selector()
    static matches(state: MatchesStateModel) {
        return state.matches;
    }

    @Selector()
    static matchTypes(state: MatchesStateModel) {
        return state.matchTypes;
    }

    @Selector()
    static request(state: MatchesStateModel) {
        return state.request;
    }

    constructor(protected matchNetwork: MatchService) { }

    @Action(ChangeSort)
    @Action(ChangePage)
    @Action(SetMatchesFilterOptions)
    onChangeSort({ patchState, getState, dispatch }: StateContext<MatchesStateModel>, { payload }: ChangeSort) {
        const { request } = getState();
        patchState({ request: { ...request, ...payload } });
        dispatch(new GetMatchesList());
    }

    @Action(GetMatchesList)
    onGetMatchesList(ctx: StateContext<MatchesStateModel>) {
        const { request } = ctx.getState();
        return this.matchNetwork.getAll2(new GetMatchesListQuery.Request(request))
            .pipe(
                tap(response => {
                    ctx.patchState({ matches: response.results || [] });
                    ctx.patchState({
                        request: {
                            ...request, rowCount: response.rowCount,
                            currentPage: response.currentPage, pageSize: response.pageSize
                        }
                    });
                }));
    }


    @Action(GetMatchTypesList)
    onGetMatchTypesList({ patchState, getState }: StateContext<MatchesStateModel>) {
        const { matchTypes } = getState();
        if (matchTypes.length === 0) {
            return this.matchNetwork.getTypes()
                .pipe(
                    tap(response => { patchState({ matchTypes: response || [] }); }),
                );
        }
    }

    @Action(GetMatchById)
    onGetMatchById({ patchState }: StateContext<MatchesStateModel>, { payload }: GetMatchById) {
        return (payload.id ? this.matchNetwork.getSingle2(payload.id) : of(new GetMatchDetailQuery.Response()))
            .pipe(
                tap(match => {
                    patchState({ match });
                })
            );
    }

}
