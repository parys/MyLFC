import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';
import { CoreState } from '@core/store';

@Component({
    selector: 'navbar-menu',
    templateUrl: './navbar-menu.component.html',
    styleUrls: ['./navbar-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { 'class': 'navbar-menu'}
})
export class NavbarMenuComponent {

    @Select(AuthState.isNewsmaker) isNewsmaker$: Observable<boolean>;

    @Select(AuthState.isAuthor) isAuthor$: Observable<boolean>;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    @Select(AuthState.isLogined) isLogined$: Observable<boolean>;

    @Select(CoreState.mobile) mobile$: Observable<boolean>;

    constructor() {
    }
}
