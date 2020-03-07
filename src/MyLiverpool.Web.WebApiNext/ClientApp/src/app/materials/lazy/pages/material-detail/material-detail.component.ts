import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { ObserverComponent } from '@domain/base';
import { AuthState } from '@auth/store';
import { GetMaterialDetailQuery, GetOtherMaterialsListQuery } from '@network/shared/materials';

import { MaterialsState, ActivateMaterial, DeleteMaterial, GetOtherMaterialsList } from '@materials/lazy/store';

@Component({
    selector: 'material-detail',
    templateUrl: './material-detail.component.html',
    styleUrls: ['./material-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialDetailComponent extends ObserverComponent {

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(MaterialsState.material) material$: Observable<GetMaterialDetailQuery.Response>;

    @Select(MaterialsState.others) others$: Observable<GetOtherMaterialsListQuery.OtherMaterialListDto[]>;

    constructor(protected router: Router, private store: Store) {
        super();
        this.store.dispatch(new GetOtherMaterialsList());
    }

    public onActivate(id: number): void {
        this.store.dispatch(new ActivateMaterial(id));
    }

    public onDelete(id: number): void {
        this.store.dispatch(new DeleteMaterial({ id, redirect: true }));
        this.router.navigate(['/news']);
    }
}
