import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { ObserverComponent } from '@domain/base';

import { AuthState } from '@auth/store';
import { GetMaterialDetailQuery } from '@network/shared/materials';
import { MaterialsState, ActivateMaterial, DeleteMaterial } from '../store';
import { Router } from '@angular/router';

@Component({
    selector: 'material-detail',
    templateUrl: './material-detail.component.html',
    styleUrls: ['./material-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialDetailComponent extends ObserverComponent {

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number >;

    @Select(MaterialsState.material) material$: Observable<GetMaterialDetailQuery.Response>;

    constructor(protected router: Router, private store: Store) {
                    super();
    }

    public onActivate(id: number): void {
        this.store.dispatch(new ActivateMaterial(id));
    }

    public onDelete(id: number): void {
        this.store.dispatch(new DeleteMaterial({ id, redirect: true }));
        this.router.navigate(['/news']);
    }
}
