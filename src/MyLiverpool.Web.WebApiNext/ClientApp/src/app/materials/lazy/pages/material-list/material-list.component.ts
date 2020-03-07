import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Subscription, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { Material, MaterialFilters, MaterialType, PagedList } from '@domain/models';
import { CustomTitleMetaService } from '@core/services';
import { TITLE_RU, NEWSS_RU, BLOGS_RU } from '@constants/ru.constants';

import { MaterialService } from '@materials/core/material.service';
import { PAGE } from '@constants/help.constants';
import { AuthState } from '@auth/store';
import { ObserverComponent } from '@domain/base';
import { ActivateMaterial, DeleteMaterial } from '@materials/lazy/store';

@Component({
    selector: 'material-list',
    templateUrl: './material-list.component.html',
    styleUrls: ['./material-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialListComponent extends ObserverComponent implements OnInit, OnDestroy {
    private type: MaterialType = MaterialType.Both;
    private sub: Subscription;
    private sub2: Subscription;
    private navigationSubscription: Subscription;
    private userId: number = null;
    public items: Material[];
    public page = 1;
    public itemsPerPage = 15;
    public totalItems: number;
    public categoryId: number;

    @Select(AuthState.isNewsmaker) isNewsmaker$: Observable<boolean>;

    @Select(AuthState.isAuthor) isAuthor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    constructor(private router: Router,
                private materialService: MaterialService,
                private route: ActivatedRoute,
                private location: Location,
                private cd: ChangeDetectorRef,
                private titleService: CustomTitleMetaService,
                private store: Store) {
                    super();
                    this.navigationSubscription = this.router.events.subscribe((e: any) => {
                        // If it is a NavigationEnd event re-initalise the component
                        if (e instanceof NavigationEnd) {
                            this.parseQueryParamsAndUpdate();
                        }
                    });
    }

    public onActivate(id: number): void {
        this.store.dispatch(new ActivateMaterial(id));
    }

    public onDelete(id: number): void {
        this.store.dispatch(new DeleteMaterial({ id, redirect: true }));
    }

    public ngOnInit(): void {
        if (this.router.url.startsWith('/news')) {
            this.titleService.setTitle(NEWSS_RU);
            this.type = MaterialType.News;
        } else if (this.router.url.startsWith('/blogs')) {
            this.titleService.setTitle(BLOGS_RU);
            this.type = MaterialType.Blogs;
        } else {
            this.type = MaterialType.Both;
            this.titleService.setTitle(TITLE_RU);
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
        if (this.sub2) { this.sub2.unsubscribe(); }
        if (this.navigationSubscription) { this.navigationSubscription.unsubscribe(); }
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
        this.updateUrl();
    }

    private updateUrl(): void {
        let newUrl = `${MaterialType[this.type].toLowerCase()}?${PAGE}=${this.page}`;
        if (this.categoryId) {
            newUrl = `${newUrl}&categoryId=${this.categoryId}`;
        }

        this.location.replaceState(newUrl);
    }

    private parsePageable(pageable: PagedList<Material>): void {
        this.items = pageable.results;
        this.page = pageable.currentPage;
        this.itemsPerPage = pageable.pageSize;
        this.totalItems = pageable.rowCount;
    }

    private update(): void {
        const filters: MaterialFilters = new MaterialFilters();
        filters.categoryId = this.categoryId || null;
        filters.materialType = MaterialType[this.type];
        filters.userId = this.userId || null;
        filters.currentPage = this.page;
        this.sub = this.materialService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
                null,
                () => this.cd.markForCheck());
    }

    private parseQueryParamsAndUpdate(): void {
        this.sub2 = this.route.queryParams.subscribe(qParams => {
                this.page = qParams[PAGE] || 1;
                this.categoryId = qParams['categoryId'] || null;
                this.userId = qParams['userId'] || null;
            });
        this.update();
    }
}
