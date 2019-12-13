﻿import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RolesCheckedService, AuthService } from '@base/auth';

@Component({
    selector: 'sidebar-right',
    templateUrl: './sidebar-right.component.html',
    styleUrls: ['./sidebar-right.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarRightComponent {
    constructor(public roles: RolesCheckedService,
                private authService: AuthService) {
    }

    public logout(): void {
        this.authService.logout();
    }
}
