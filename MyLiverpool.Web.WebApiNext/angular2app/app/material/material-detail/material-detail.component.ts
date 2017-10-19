import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformServer } from "@angular/common";
import { Title, DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { MaterialService } from "../material.service";
import { Material } from "../material.model";                
import { MaterialType } from "@app/materialCategory";                
import { RolesCheckedService, StorageService, DeleteDialogComponent } from "@app/shared";
import { MaterialActivateDialogComponent } from "../material-activate-dialog.component";

@Component({
    selector: "material-detail",
    templateUrl: "./material-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialDetailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public item: Material;
    public body: SafeHtml;
    public type: MaterialType;
    
    constructor(private service: MaterialService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private route: ActivatedRoute,
        private cd: ChangeDetectorRef,
        private storage: StorageService,
        public roles: RolesCheckedService,
        private router: Router,
        private sanitizer: DomSanitizer,
        private titleService: Title,
        private snackBar: MatSnackBar,
        private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            if (+params["id"] === 0) {
                this.router.navigate(["/"]); //bug temporary workaround
            } else {
                this.service.getSingle(+params["id"])
                    .subscribe(data => this.parse(data),
                        e => console.log(e));
            }
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
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete();
            }
        }, e => console.log(e));
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    public getShortLink(url: string): string {
        if (!url || isPlatformServer(this.platformId)) {
            return "";
        }
        if (url.indexOf("http://") === -1 && url.indexOf("https://") === -1) {
            url = `http://${url}`;
        }
        return new URL(url).hostname;
    }

    public sanitizeByUrl(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustResourceUrl(text);
    }

    private activate() : void {
        this.service.activate(this.item.id)
            .subscribe(res => {
                    if (res) {
                        this.item.pending = false;
                        this.cd.markForCheck();
                        this.snackBar.open("Материал успешно активирован", null, { duration: 5000 });
                    } else {
                        this.snackBar.open("Материал НЕ БЫЛ активирован", null, { duration: 5000 });
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
                    this.snackBar.open("Ошибка удаления", null, { duration: 2000 });
                }
                },
                e => console.log(e));
    }

    private parse(item: Material): void {
        this.item = item;
        this.body = this.sanitizeByHtml(item.message);
        this.titleService.setTitle(item.title);
        this.addView();
        this.cd.markForCheck();
        this.cd.detectChanges();
    }

    private addView(): void {
        if (this.storage.tryAddViewForMaterial(this.item.id)) {
            this.service.addView(this.item.id).subscribe(data => data, e => console.log(e));
            this.item.reads += 1;
        }
    }
}