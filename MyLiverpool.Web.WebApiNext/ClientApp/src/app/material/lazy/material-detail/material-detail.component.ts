import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs";
import { MaterialService, MaterialActivateDialogComponent } from "../../core";
import { Material } from "../../model";                
import { MaterialType } from "@app/materialCategory";                
import { DeleteDialogComponent } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { StorageService } from "@app/+storage";

@Component({
    selector: "material-detail",
    templateUrl: "./material-detail.component.html",
    styleUrls: ["./material-detail.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialDetailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private subs: Subscription;
    public item: Material;
    public type: MaterialType;
    
    constructor(private service: MaterialService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private route: ActivatedRoute,
        private cd: ChangeDetectorRef,
        private storage: StorageService,
        public roles: RolesCheckedService,
        private router: Router,
        private titleService: Title,
        private snackBar: MatSnackBar,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        if (this.router.url.startsWith("/news")) {
            this.titleService.setTitle("Новость");
            this.type = MaterialType.News;
            this.cd.markForCheck();
        } else {
            this.titleService.setTitle("Блог");
            this.type = MaterialType.Blogs;
            this.cd.markForCheck();
        }
        
        this.sub = this.route.params.subscribe(params => {
            //if (+params["id"] === 0) {
            //    this.router.navigate(["/"]); //bug temporary workaround
            //} else {
                this.service.getSingle(+params["id"])
                    .subscribe(data => {
                            this.parse(data);
                        },
                    e => console.log(e),
                    () => {
                        if (isPlatformBrowser(this.platformId) && this.item.socialLinks) {
                            ssn();
                        }
                        this.cd.markForCheck();
                    });
           // }
        });
    }

    public ngOnDestroy(): void {
        if(this.sub) this.sub.unsubscribe();
    }
    
    public showActivateModal(): void {
        const dialogRef = this.dialog.open(MaterialActivateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.activate();
            }
        }, e => console.log(e));
    }

    public showDeleteModal(): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete();
            }
        }, e => console.log(e));
    }

    private activate() : void {
        this.service.activate(this.item.id)
            .subscribe(res => {
                    if (res) {
                        this.item.pending = false;
                        this.cd.markForCheck();
                        this.snackBar.open("Материал успешно активирован");
                    } else {
                        this.snackBar.open("Материал НЕ БЫЛ активирован");
                    }
                },
            e => console.log(e));
    }

    private delete(): void {
        this.service.delete(this.item.id)
            .subscribe(result => {
                if (result) {
                    this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`]);
                } else {
                    this.snackBar.open("Ошибка удаления");
                }
                },
                e => console.log(e));
    }

    private parse(item: Material): void {
        this.titleService.setTitle(item.title);
        this.item = item;
        this.addView();
    //    this.cd.detectChanges();
    }

    private addView(): void {
        if (this.storage.tryAddViewForMaterial(this.item.id)) {
            this.service.addView(this.item.id).subscribe(data => data, e => console.log(e));
            this.item.reads += 1;
        }
    }
}