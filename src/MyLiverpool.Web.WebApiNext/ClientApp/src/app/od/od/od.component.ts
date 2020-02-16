import {
    Component, Input, ChangeDetectionStrategy, Inject, PLATFORM_ID, NgZone, AfterContentInit
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { Subscription } from 'rxjs';
declare function addAd(name: string): any;
declare function loadYa(): any;

@Component({
    selector: 'od',
    templateUrl: 'od.component.html',
    styleUrls: ['od.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OdComponent implements AfterContentInit {
    public name: string = null;
    private sub$: Subscription;
    @Input()
    blockName = '';

    constructor(
        @Inject(PLATFORM_ID) private platformId: object,
        private zone: NgZone) {
    }

    public ngAfterContentInit(): void {
        this.name = `yandex_rtb_${this.blockName}`;
        this.sub$ = this.zone.onStable.subscribe(() => this.load());
    }

    public load() {
        if (isPlatformServer(this.platformId)) { return; }
        this.zone.runOutsideAngular(() => {
            loadYa();
            if (addAd(this.blockName)) {
                this.zone.run(() => this.sub$.unsubscribe());
            }
        });
    }
}
