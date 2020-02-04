import { Component, Output, EventEmitter, ChangeDetectionStrategy, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthState } from '@auth/store';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Output()
    public toggle: EventEmitter<any> = new EventEmitter();
    public showAd = false;

    @Select(AuthState.isLogined) isLogined$: Observable<boolean>;

    @HostListener('window:resize', ['$event'])
    public sizeChange(event: any) {
        if (isPlatformBrowser(this.platformId)) {
            const showAd = window.innerWidth > 1673;
            if (showAd !== this.showAd) {
                this.showAd = showAd;
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
