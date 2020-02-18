import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription, Observable } from 'rxjs';

import { CustomTitleMetaService as CustomTitleService } from '@core/services';
import { NEWS_RU, BLOG_RU } from '@constants/ru.constants';
import { StorageService } from '@base/storage';
import { Material, MaterialType } from '@domain/models';
import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';

import { MaterialService } from '@materials/core';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { GetMaterialDetailQuery } from '@network/shared/materials';
import { MaterialsState } from '../store';
declare function ssn(): any;

const MAT_DETAIL_KEY = makeStateKey<Material>('mat-detail');

@Component({
    selector: 'material-detail',
    templateUrl: './material-detail.component.html',
    styleUrls: ['./material-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialDetailComponent extends ObserverComponent implements OnDestroy {
    private sub: Subscription;
    public item: Material = new Material();

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(MaterialsState.material) material$: Observable<GetMaterialDetailQuery.Response>;

    constructor(private transferState: TransferState,
                private service: MaterialService,
                @Inject(PLATFORM_ID) private platformId: object,
                private route: ActivatedRoute,
                private cd: ChangeDetectorRef,
                private storage: StorageService,
                private router: Router,
                private titleService: CustomTitleService,
                private snackBar: MatSnackBar,
                private notifierService: NotifierService) {
                    super();
                    const sub$ = this.router.events.subscribe((e: any) => {
                        if (e instanceof NavigationEnd) {
                            this.init();
                        }
                    }); // look when move to material store
                    this.subscriptions.push(sub$);
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    private init(): void {
        if (this.router.url.startsWith('/news')) {
            this.titleService.setTitle(NEWS_RU);
        } else {
            this.titleService.setTitle(BLOG_RU);
        }
        this.update();
        this.cd.markForCheck();
    }

    public onActivate(): void {
        this.service.activate(this.item.id)
            .subscribe(res => {
                if (res) {
                    this.item.pending = false;
                    this.cd.markForCheck();
                    this.snackBar.open('Материал активирован');
                } else {
                    this.snackBar.open('Материал НЕ активирован');
                }
            });
    }

    private update(): void {
        // todo const savedData = this.transferState.get(MAT_DETAIL_KEY, null);
        // if (savedData) {
        //    this.parse(savedData);
        //    this.transferState.remove(MAT_DETAIL_KEY);
        // } else {
            this.sub = this.route.params.subscribe(params => {
                this.service.getSingle(+params.id)
                    .subscribe(data => {
                            this.parse(data);
                            this.transferState.set(MAT_DETAIL_KEY, data);
                        },
                        null,
                        () => {
                            this.cd.markForCheck();
                        });
            });
       // }
    }

    public onDelete(): void {
        this.service.delete(this.item.id)
            .subscribe(result => {
                if (result) {
                    this.router.navigate([`/news}`]); // todo to appropriate url
                } else {
                    this.snackBar.open('Ошибка удаления');
                }
            });
    }

    private parse(item: Material): void {
        this.titleService.setTitle(item.title);
        this.item = item;
        this.addView();
        this.titleService.updateDescriptionMetaTag(item.brief);
        this.titleService.updateKeywordsMetaTag(item.tags);
        this.titleService.updateOgImageMetaTag(`https://mylfc.ru${item.photoPreview}`);
        if (item.socialLinks && isPlatformBrowser(this.platformId)) {
            ssn();
        }
    }

    private addView(): void {
        if (this.storage.tryAddViewForMaterial(this.item.id)) {
            this.service.addView(this.item.id).subscribe(data => data);
            this.item.reads += 1;
        }
    }
}
