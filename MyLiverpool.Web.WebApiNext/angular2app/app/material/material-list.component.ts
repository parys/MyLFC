import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { MdDialog, MdSnackBar } from '@angular/material';
import { MaterialService } from "./material.service";
import { Material } from "./material.model";
import { Subscription } from "rxjs/Subscription";
import { Pageable } from "../shared/pageable.model";
import { MaterialFilters } from "./materialFilters.model";
import { Router, ActivatedRoute } from "@angular/router";   
import { RolesCheckedService, IRoles, DeleteDialogComponent } from "../shared/index";
import { MaterialType } from "../materialCategory/materialType.enum";
import { MaterialActivateDialogComponent } from "./material-activate-dialog.component";

@Component({
    selector: "material-list",
    templateUrl: "./material-list.component.html"
})
export class MaterialListComponent implements OnInit, OnDestroy {
    public items: Material[];
    public page: number = 1;
    public itemsPerPage = 15;
    public totalItems: number;
    public categoryId: number;
    private userName: string;
    public roles: IRoles;
    private type: MaterialType;
    private sub: Subscription;
    private sub2: Subscription;

    constructor(private router: Router,
        private materialService: MaterialService,
        private route: ActivatedRoute,
        private location: Location,
        private rolesChecked: RolesCheckedService,
        private snackBar: MdSnackBar,
        private dialog: MdDialog) {

        if (route.snapshot.data["type"] === MaterialType[MaterialType.News]) {
            this.type = MaterialType.News;
        } else if (route.snapshot.data["type"] === MaterialType[MaterialType.Blogs]) {
            this.type = MaterialType.Blogs;
        } else {
            this.type = MaterialType.Both;
        }
        this.parseQueryParamsAndUpdate(route);
    }

    public showActivateModal(index: number): void {
        let dialogRef = this.dialog.open(MaterialActivateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.activate(index);
            }
        }, e => console.log(e));
    }

    public showDeleteModal(index: number): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        }, e => console.log(e));
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
    }

    public ngOnDestroy(): void {
        if(this.sub) this.sub.unsubscribe();
        if(this.sub2) this.sub2.unsubscribe();
    }

    public pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        this.updateUrl();
    };

    private updateUrl(): void {
        let newUrl = `${MaterialType[this.type].toLowerCase()}?page=${this.page}`;
        if (this.categoryId) {
            newUrl = `${newUrl}&categoryId=${this.categoryId}`;
        }
        if (this.userName) {
            newUrl = `${newUrl}&userName=${this.userName}`;
        }

        this.location.replaceState(newUrl);
    }

    private activate(index: number): void {
        let result: boolean;

        let news = this.items[index];
        this.materialService.activate(news.id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        news.pending = false;
                    }
                }
            );
    }

    private delete(index: number): void {
        let result: boolean;
        this.materialService.delete(this.items[index].id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.items.splice(index, 1);
                    } else {
                        this.snackBar.open("Ошибка удаления", null, {duration: 2000});
                    }
                }
            );
    }

    private parsePageable(pageable: Pageable<Material>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    private update(): void {
        let filters = new MaterialFilters();
        filters.categoryId = this.categoryId || null;
        filters.materialType = MaterialType[this.type];
        filters.userName = this.userName || null;
        filters.page = this.page;

        this.sub = this.materialService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
                error => console.log(error));
    }

    private parseQueryParamsAndUpdate(route: ActivatedRoute): void {
        this.sub2 = route.queryParams.subscribe(qParams => {
                this.page = qParams["page"] || 1;
                this.categoryId = qParams["categoryId"] || "";
                this.userName = qParams["userName"] || "";
            },
            error => console.log(error));
        this.update();
    }
}