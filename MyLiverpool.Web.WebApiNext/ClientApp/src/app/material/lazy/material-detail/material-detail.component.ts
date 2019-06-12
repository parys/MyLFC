import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { MaterialService, MaterialActivateDialogComponent } from "../../core";
import { Material } from "../../model";
import { MaterialType } from "@app/materialCategory";
import { DeleteDialogComponent } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { StorageService } from "@app/+storage";
import { CustomTitleMetaService as CustomTitleService } from "@app/shared";
import { NEWS_RU, BLOG_RU } from "@app/+constants/ru.constants";


const MAT_DETAIL_KEY = makeStateKey<Material>("mat-detail");

@Component({
    selector: "material-detail",
    templateUrl: "./material-detail.component.html",
    styleUrls: ["./material-detail.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialDetailComponent implements OnDestroy {
    private sub: Subscription;
    private navigationSubscription: Subscription;
    public item: Material;
    public type: MaterialType;

    constructor(private transferState: TransferState,
        private service: MaterialService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private route: ActivatedRoute,
        private cd: ChangeDetectorRef,
        private storage: StorageService,
        public roles: RolesCheckedService,
        private router: Router,
        private titleService: CustomTitleService,
        private snackBar: MatSnackBar,
        private dialog: MatDialog) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.init();
            }
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
        if (this.navigationSubscription) this.navigationSubscription.unsubscribe();
    }

    public showActivateModal(): void {
        const dialogRef = this.dialog.open(MaterialActivateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.activate();
            }
        });
    }

    public showDeleteModal(): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete();
            }
        });
    }

    private init(): void {
        if (this.router.url.startsWith("/news")) {
            this.titleService.setTitle(NEWS_RU);
            this.type = MaterialType.News;
            this.cd.markForCheck();
        } else {
            this.titleService.setTitle(BLOG_RU);
            this.type = MaterialType.Blogs;
            this.cd.markForCheck();
        }
        this.update();
    }

    private activate(): void {
        this.service.activate(this.item.id)
            .subscribe(res => {
                if (res) {
                    this.item.pending = false;
                    this.cd.markForCheck();
                    this.snackBar.open("Материал активирован");
                } else {
                    this.snackBar.open("Материал НЕ активирован");
                }
            });
    }

    private update(): void {
        const savedData = this.transferState.get(MAT_DETAIL_KEY, null);
        if (savedData) {
            this.parse(savedData);
        } else {
            this.sub = this.route.params.subscribe(params => {
                this.service.getSingle(+params["id"])
                    .subscribe(data => {
                            this.parse(data);
                            this.transferState.set(MAT_DETAIL_KEY, data);

                        },
                        () => {},
                        () => {
                            this.cd.markForCheck();
                        });
            });
        }
        if (this.item.socialLinks && isPlatformBrowser(this.platformId)) {
            ssn();
        }
    }

    private delete(): void {
        this.service.delete(this.item.id)
            .subscribe(result => {
                if (result) {
                    this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`]);
                } else {
                    this.snackBar.open("Ошибка удаления");
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
    }

    private addView(): void {
        if (this.storage.tryAddViewForMaterial(this.item.id)) {
            this.service.addView(this.item.id).subscribe(data => data);
            this.item.reads += 1;
        }
    }
}