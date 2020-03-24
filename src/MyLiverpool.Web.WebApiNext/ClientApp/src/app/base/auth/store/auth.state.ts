
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';

import { AuthStateModel } from './auth-state.model';
import { SetUser, SetTokens, Logout } from './auth.actions';
import { RolesEnum } from '@auth/models';


@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        user: null,
        tokens: null
    },
})
@Injectable()
export class AuthState {

    private static isInRole(state: AuthStateModel, role: string): boolean {
        const roles = state.user && state.user.role ? state.user.role : [];
        const updatedRoles = roles.map(x => x.toLowerCase);
        return updatedRoles.includes(role.toLowerCase)
    }

    @Selector()
    static user(state: AuthStateModel) {
        return state.user;
    }

    @Selector()
    static userId(state: AuthStateModel) {
        return state.user ? state.user.sub : null;
    }

    @Selector()
    static userName(state: AuthStateModel) {
        return state.user ? state.user.name : null;
    }

    @Selector()
    static isLogined(state: AuthStateModel) {
        return state.user !== null;
    }

    @Selector()
    static isInformer(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.InfoStart.toString());
    }

    @Selector()
    static isNewsmaker(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.NewsStart.toString());
    }

    @Selector()
    static isAdmin(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.AdminFull.toString());
    }

    @Selector()
    static isAdminAssistant(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.AdminStart.toString());
    }

    @Selector()
    static isModerator(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.UserStart.toString());
    }

    @Selector()
    static isMainModerator(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.UserFull.toString());
    }

    @Selector()
    static isAuthor(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.BlogStart.toString());
    }

    @Selector()
    static isEditor(state: AuthStateModel) {
        return AuthState.isInRole(state, RolesEnum.BlogFull.toString()) || AuthState.isInRole(state, RolesEnum.NewsFull.toString());
    }

    @Selector()
    static isSiteMember(state: AuthStateModel) {
        return state.user !== null && (AuthState.isInRole(state, RolesEnum.NewsStart.toString())
        || AuthState.isInRole(state, RolesEnum.UserStart.toString())
        || AuthState.isInRole(state, RolesEnum.AdminStart.toString())
        || AuthState.isInRole(state, RolesEnum.BlogStart.toString())
        || AuthState.isInRole(state, RolesEnum.InfoStart.toString()));
    }

    static isSelf(userId: number) {
        return createSelector(
            [AuthState],
            (state: AuthStateModel) => {
                return state.user.sub === userId;
            }
        );
    }

    @Action(SetUser)
    onSetUser({ patchState }: StateContext<AuthStateModel>, { payload }: SetUser) {
        patchState({ user: { ...payload } });
    }

    @Action(SetTokens)
    onSetTokens({ patchState }: StateContext<AuthStateModel>, { payload }: SetTokens) {
        patchState({ tokens: { ...payload } });
    }

    @Action(Logout)
    onLogout({ patchState }: StateContext<AuthStateModel>) {
        patchState({ tokens:  null  });
        patchState({ user:  null  });
    }


}
