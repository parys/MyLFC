import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription, Observable } from 'rxjs';

import { CustomTitleMetaService as CustomTitleService } from '@shared/index';
import { NEWS_RU, BLOG_RU } from '@constants/ru.constants';
import { StorageService } from '@base/storage';
import { Material, MaterialType } from '@domain/models';
import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';

import { MaterialService } from '@materials/core';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
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
    public type: MaterialType;

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

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

    public onShowActivateModal(): void {
        const sub$ = this.notifierService.confirm(new ConfirmationMessage({ title: 'Активировать материал?' }))
        .subscribe(result => {
            if (!result) {
                return;
            }

            this.activate();
        //    const payload = new DeleteUserCommand.Request({ userId });
        //    this.store.dispatch(new DeleteUser(payload));
        });
        this.subscriptions.push(sub$);
    }

    public onShowDeleteModal(): void {
        const sub$ = this.notifierService.confirm(new ConfirmationMessage({ title: 'Удалить материал?' }))
        .subscribe(result => {
            if (!result) {
                return;
            }

            this.delete();
        //    const payload = new DeleteUserCommand.Request({ userId });
        //    this.store.dispatch(new DeleteUser(payload));
        });
        this.subscriptions.push(sub$);
    }

    private init(): void {
        if (this.router.url.startsWith('/news')) {
            this.titleService.setTitle(NEWS_RU);
            this.type = MaterialType.News;
        } else {
            this.titleService.setTitle(BLOG_RU);
            this.type = MaterialType.Blogs;
        }
        this.update();
        this.cd.markForCheck();
    }

    private activate(): void {
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

    private delete(): void {
        this.service.delete(this.item.id)
            .subscribe(result => {
                if (result) {
                    this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`]);
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
