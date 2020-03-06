import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '@base/auth';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '@auth/store';

@Component({
    selector: 'sidebar-right',
    templateUrl: './sidebar-right.component.html',
    styleUrls: ['./sidebar-right.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarRightComponent {

    @Select(AuthState.userId) userId$: Observable<number>;

    constructor(private authService: AuthService) {
    }

    public logout(): void {
        this.authService.logout();
    }
}
