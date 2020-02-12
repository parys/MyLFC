import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { CoreStateModel } from '@core/store/core-state.model';
import { ChangeMobile, SetNotificationsCount, SetPmsCount } from '@core/store/core.actions';

@State<CoreStateModel>({
    name: 'core',
    defaults: {
        mobile: true,
        notificationsCount: 0,
        pmCount: 0
    },
})
@Injectable()
export class CoreState {

    @Selector()
    static mobile(state: CoreStateModel) {
        return state.mobile;
    }

    @Selector()
    static notificationsCount(state: CoreStateModel) {
        return state.notificationsCount;
    }

    @Selector()
    static pmCount(state: CoreStateModel) {
        return state.pmCount;
    }

    constructor() { }

    @Action(ChangeMobile)
    onChangeMobile({ patchState }: StateContext<CoreStateModel>, { payload }: ChangeMobile) {
        patchState({ mobile: payload });
    }

    @Action(SetNotificationsCount)
    onSetNotificationsCount({ patchState }: StateContext<CoreStateModel>, { payload }: SetNotificationsCount) {
        patchState({ notificationsCount: payload });
    }

    @Action(SetPmsCount)
    onSetPmsCount({ patchState }: StateContext<CoreStateModel>, { payload }: SetPmsCount) {
        patchState({ notificationsCount: payload });
    }
}
