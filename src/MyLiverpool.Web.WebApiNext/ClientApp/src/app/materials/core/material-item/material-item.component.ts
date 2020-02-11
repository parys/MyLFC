import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';

import { Material } from '@domain/models';
import { AuthState } from '@auth/store';
import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';

import { MaterialService } from '../material.service';
import { Select } from '@ngxs/store';

@Component({
    selector: 'material-item',
    templateUrl: './material-item.component.html',
    styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent extends ObserverComponent {
    @Input()
    public item: Material;

    @Select(AuthState.isNewsmaker) isNewsmaker$: Observable<boolean>;

    @Select(AuthState.isAuthor) isAuthor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    constructor(
        private materialService: MaterialService,
        private cd: ChangeDetectorRef,
        private notifierService: NotifierService,
        private snackBar: MatSnackBar) {
            super();
        }

    public onShowActivateModal(): void {
        const sub$ = this.notifierService.confirm(new ConfirmationMessage({ title: 'Активировать материал?' }))
            .subscribe(result => {
                if (!result) {
                    return;
                }

                this.activate();
            //    const payload = new DeleteUserCommand.Request({ userId });
            //    this.store.dispatch(new DeleteUser(payload));
            });
        this.subscriptions.push(sub$);
    }

    public onShowDeleteModal(): void {
        const sub$ = this.notifierService.confirm(new ConfirmationMessage({ title: 'Удалить материал?' }))
        .subscribe(result => {
            if (!result) {
                return;
            }

            this.delete();
        //    const payload = new DeleteUserCommand.Request({ userId });
        //    this.store.dispatch(new DeleteUser(payload));
        });
        this.subscriptions.push(sub$);
    }

    private activate(): void {
        this.materialService.activate(this.item.id)
            .subscribe(res => {
                    if (res) {
                        this.item.pending = false;
                        this.snackBar.open('Материал активирован');
                    } else {
                        this.snackBar.open('Материал НЕ активирован');
                    }
                },
                null,
                () => this.cd.markForCheck());
    }

    private delete(): void {
        this.materialService.delete(this.item.id)
            .subscribe(res => {
                    if (res) {
                        this.item = null;
                    } else {
                        this.snackBar.open('Ошибка удаления');
                    }
                },
                null,
                () => this.cd.markForCheck());
    }

}
