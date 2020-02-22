import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { Material, PagedList } from '@domain/models';
import { CustomTitleMetaService } from '@core/services';
import { TITLE_RU } from '@constants/ru.constants';

import { MaterialService } from '@materials/core/material.service';

const MAT_LATEST_KEY = makeStateKey<PagedList<Material>>('mat-latest');
const MAT_PINNED_KEY = makeStateKey<PagedList<Material>>('mat-pinned');

@Component({
    selector: 'material-home',
    templateUrl: './material-home.component.html',
    styleUrls: ['./material-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialHomeComponent implements OnInit, OnDestroy {
    private $latest: Subscription;
    private $pinned: Subscription;
    private navigationSubscription: Subscription;
    public latest: Material[];
    public pinned: Material[];

    constructor(private transferState: TransferState,
                private router: Router,
                private materialService: MaterialService,
                private cd: ChangeDetectorRef,
                private titleService: CustomTitleMetaService) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.update();
            }
        });
    }

    public ngOnInit(): void {
        this.titleService.setTitle(TITLE_RU);
        this.update();
    }

    public ngOnDestroy(): void {
        if (this.$latest) { this.$latest.unsubscribe(); }
        if (this.$pinned) { this.$pinned.unsubscribe(); }
        if (this.navigationSubscription) { this.navigationSubscription.unsubscribe(); }
    }

    public trackByFn(index: number, item: Material) {
        if (!item) { return null; }
        return item.id;
    }

    private update(): void {
        this.updateLatest();
        this.updatePinned();
    }

    private parseLatest(pageable: PagedList<Material>): void {
        this.latest = pageable.results;
    }

    private parsePinned(pageable: PagedList<Material>): void {
        this.pinned = pageable.results;
    }

    private updateLatest(): void {
        // todo const savedData = this.transferState.get(MAT_LATEST_KEY, null);
        // if (savedData) {
        //    this.parseLatest(savedData);
        //    this.transferState.remove(MAT_LATEST_KEY);
        // } else {
            this.$latest = this.materialService
                .getLatest()
                .subscribe(data => {
                        this.parseLatest(data);
                        this.transferState.set(MAT_LATEST_KEY, data);

                    },
                    null,
                    () => this.cd.markForCheck());
      //  }
    }

    private updatePinned(): void {
        // const savedData = this.transferState.get(MAT_PINNED_KEY, null);
        // if (savedData) {
        //    this.parsePinned(savedData);
        //    this.transferState.remove(MAT_PINNED_KEY);
        // } else {
            this.$pinned = this.materialService
                .getTop()
                .subscribe(data => {
                        this.parsePinned(data);
                        this.transferState.set(MAT_PINNED_KEY, data);

                    },
                    null,
                    () => this.cd.markForCheck());
       // }
    }
}
