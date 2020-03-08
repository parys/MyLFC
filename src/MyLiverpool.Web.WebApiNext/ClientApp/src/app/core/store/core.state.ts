import { Injectable } from '@angular/core';

import { State, Action, StateContext, Selector } from '@ngxs/store';

import { CoreStateModel } from '@core/store/core-state.model';
import {
    ChangeMobile,
    GetUnreadNotificationsCount,
    GetUnreadPmsCount,
    NewPm,
    ReadPms,
    NewNotification,
    ReadNotifications,
    GetHeaderMatch
} from '@core/store/core.actions';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomTitleMetaService } from '@core/services';
import { Router } from '@angular/router';
import { MobileLayoutService } from '@layout/modules/mobile-layout/mobile-layout.service';

@State<CoreStateModel>({
    name: 'core',
    defaults: {
        mobile: null,
        notificationsCount: 0,
        pmsCount: 0,
        headerMatch: null,
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
    static pmsCount(state: CoreStateModel) {
        return state.pmsCount;
    }

    @Selector()
    static headerMatch(state: CoreStateModel) {
        return state.headerMatch;
    }


    constructor(private layoutService: MobileLayoutService,
                private titleService: CustomTitleMetaService,
                private router: Router,
                private snackBar: MatSnackBar) { }

    @Action(ChangeMobile)
    onChangeMobile({ patchState }: StateContext<CoreStateModel>, { payload }: ChangeMobile) {
        patchState({ mobile: payload });
    }

    @Action(GetUnreadNotificationsCount)
    onGetUnreadNotificationsCount({ patchState }: StateContext<CoreStateModel>) {
        return this.layoutService.getUnreadNotificationsCount()
            .pipe(tap(count => {
                patchState({ notificationsCount: count });
                if (count > 0) {
                    this.titleService.addCount(count);
                    this.snackBar.open('Есть новые уведомления', 'Перейти')
                        .onAction()
                        .subscribe(_ => this.router.navigate(['notifications']));
                }
            }));
    }

    @Action(NewPm)
    onNewPm({ patchState, getState }: StateContext<CoreStateModel>, { payload }: NewPm) {
        let { pmsCount } = getState();
        patchState({ pmsCount: ++pmsCount });
        this.titleService.addCount(1);
        return this.snackBar.open('Новое сообщение', 'Перейти')
            .onAction()
            .subscribe(_ => this.router.navigate(['pms', payload.id]));
    }

    @Action(ReadPms)
    onReadPms({ patchState, getState }: StateContext<CoreStateModel>) {
        let { pmsCount } = getState();
        patchState({ pmsCount: --pmsCount });
        this.titleService.removeCount(1);
    }

    @Action(GetUnreadPmsCount)
    onGetUnreadPmsCount({ patchState }: StateContext<CoreStateModel>) {
        return this.layoutService.getUnreadPmsCount()
            .pipe(
                tap(count => {
                    patchState({ pmsCount: count });
                    if (count > 0) {
                        this.titleService.addCount(count);
                        this.snackBar
                            .open('Есть новые сообщения', 'Перейти')
                            .onAction()
                            .subscribe(() => this.router.navigate(['pms']));
                    }
                }));
    }

    @Action(NewNotification)
    onNewNotification({ patchState, getState }: StateContext<CoreStateModel>, { payload }: NewNotification) {
        let { notificationsCount } = getState();
        patchState({ notificationsCount: ++notificationsCount });
        this.titleService.addCount(1);
        return this.snackBar.open('Новое уведомление', 'Перейти')
            .onAction()
            .subscribe(_ => {
                this.layoutService.read([payload.id])
                    .pipe(tap(_ => this.router.navigate([`/${payload.typeName}/${payload.entityId}`], { fragment: payload.commentId ? `com${payload.commentId}` : '' })));
            }
            );
    }

    @Action(ReadNotifications)
    onReadNotifications({ patchState, getState }: StateContext<CoreStateModel>, { payload }: ReadNotifications) {
        let { notificationsCount } = getState();
        notificationsCount -= payload;
        patchState({ notificationsCount });
        this.titleService.removeCount(payload);
    }


    @Action(GetHeaderMatch)
    onGetHeaderMatch({ patchState }: StateContext<CoreStateModel>) {
        return this.layoutService.getHeaderMatch()
            .pipe(
                tap(match => {
                    patchState({ headerMatch: match });
                }));
    }
}
