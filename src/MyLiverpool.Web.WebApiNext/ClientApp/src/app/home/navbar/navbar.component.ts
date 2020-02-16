import { Component, Output, EventEmitter, ChangeDetectionStrategy, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthState } from '@auth/store';
import { CoreState } from '@core/store';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Output()
    public toggle: EventEmitter<any> = new EventEmitter();
    public showOd = false;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(CoreState.mobile) mobile$: Observable<boolean>;

    @HostListener('window:resize', ['$event'])
    public sizeChange(event: any) {
        if (isPlatformBrowser(this.platformId)) {
            const showOd = window.innerWidth > 1673;
            if (showOd !== this.showOd) {
                this.showOd = showOd;
            }
        }
    }

    constructor(
        @Inject(PLATFORM_ID) private platformId: object) {
        if (isPlatformBrowser(this.platformId)) {
            this.sizeChange('');
        }
    }
}
