import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { State, Action, StateContext, Selector } from '@ngxs/store';


import { NoticeMessage } from '@notices/shared';
import { ShowNotice } from '@notices/store';

import { MatchPersonsStateModel } from './match-persons.model';
import {     GetMatchPersonTypesList
} from './match-persons.actions';

import { MatchPersonService } from '@match-persons/match-person.service';


@State<MatchPersonsStateModel>({
    name: 'matchPersons',
    defaults: {
        matchPersonTypes: []
    },
})
@Injectable()
export class MatchPersonsState {

    @Selector()
    static matchPersonTypes(state: MatchPersonsStateModel) {
        return state.matchPersonTypes;
    }

    constructor(protected matchPersonNetwork: MatchPersonService) { }

    // @Action(ChangeSort)
    // @Action(ChangePage)
    // @Action(SetMatchesFilterOptions)
    // onChangeSort({ patchState, getState, dispatch }: StateContext<MatchesStateModel>, { payload }: ChangeSort) {
    //     const { request } = getState();
    //     patchState({ request: { ...request, ...payload } });
    //     dispatch(new GetMatchesList());
    // }

    // @Action(GetMatchesList)
    // onGetMatchesList(ctx: StateContext<MatchesStateModel>) {
    //     const { request } = ctx.getState();
    //     return this.matchNetwork.getAll2(new GetMatchesListQuery.Request(request))
    //         .pipe(
    //             tap(response => {
    //                 ctx.patchState({ matches: response.results || [] });
    //                 ctx.patchState({
    //                     request: {
    //                         ...request, rowCount: response.rowCount,
    //                         currentPage: response.currentPage, pageSize: response.pageSize
    //                     }
    //                 });
    //             }));
    // }


    @Action(GetMatchPersonTypesList)
    onGetMatchPersonTypesList({ patchState, getState }: StateContext<MatchPersonsStateModel>) {
        const { matchPersonTypes } = getState();
        if (matchPersonTypes.length === 0) {
            return this.matchPersonNetwork.getTypes()
                .pipe(
                    tap(response => { patchState({ matchPersonTypes: response || [] }); }),
                );
        }
    }

    // @Action(GetMatchById)
    // onGetMatchById({ patchState }: StateContext<MatchesStateModel>, { payload }: GetMatchById) {
    //     return (payload.id ? this.matchNetwork.getSingle2(payload.id) : of(new GetMatchDetailQuery.Response()))
    //         .pipe(
    //             tap(match => {
    //                 patchState({ match });
    //             })
    //         );
    // }

    // @Action(ChangeUserRoleGroup)
    // onChangeUserRoleGroup(ctx: StateContext<MatchesStateModel>, { payload }: ChangeUserRoleGroup) {
    //     const { match } = ctx.getState();
    //     return this.matchesNetwork.updateRoleGroup(payload.userId, payload.roleGroupId).pipe(
    //         tap(response => {
    //             ctx.patchState({ user: { ...user, roleGroupId: payload.roleGroupId } });
    //             const notice = NoticeMessage.success('Роль изменена', 'Группа пользователя заменена.');
    //             ctx.dispatch(new ShowNotice(notice));
    //         }));
    // }

}
