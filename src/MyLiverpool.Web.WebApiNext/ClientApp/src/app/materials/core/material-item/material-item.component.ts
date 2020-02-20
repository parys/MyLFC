import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Material } from '@domain/models';
import { AuthState } from '@auth/store';
import { ObserverComponent } from '@domain/base';

import { Select, Store } from '@ngxs/store';
import { ActivateMaterial, DeleteMaterial } from '@materials/lazy/store';

@Component({
    selector: 'material-item',
    templateUrl: './material-item.component.html',
    styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent extends ObserverComponent {
    @Input() public item: Material;

    @Select(AuthState.isNewsmaker) isNewsmaker$: Observable<boolean>;

    @Select(AuthState.isAuthor) isAuthor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    constructor(private store: Store) {
            super();
        }

    public onActivate(id: number): void {
        this.store.dispatch(new ActivateMaterial(id));
    }

    public onDelete(id: number): void {
        this.store.dispatch(new DeleteMaterial({ id, redirect: true }));
    }
}
