import { Component, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { MaterialService } from "./material.service";
import { Material } from "./material.model";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../shared/pageable.model";
import { MaterialFilters } from "./materialFilters.model";
import { Router, ActivatedRoute } from "@angular/router";   
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap";
import { MaterialType } from "../materialCategory/materialType.enum";

@Component({
    selector: "material-list",
    template: require("./material-list.component.html")
})
export class MaterialListComponent implements OnInit {
    items: Material[];
    page: number = 1;
    itemsPerPage = 15;
    totalItems: number;
    categoryId: number;
    userName: string;
    roles: IRoles;
    selectedItemIndex: number = null;
    type: MaterialType;

    @ViewChild("activateModal")
    activateModal: ModalDirective;
    @ViewChild("deleteModal")
    deleteModal: ModalDirective;

    constructor(private router: Router,
        private materialService: MaterialService,
        private route: ActivatedRoute,
        private location: Location,
        private rolesChecked: RolesCheckedService) {

        if (route.snapshot.data["type"] === MaterialType[MaterialType.News]) {
            this.type = MaterialType.News;
        } else if (route.snapshot.data["type"] === MaterialType[MaterialType.Blogs]) {
            this.type = MaterialType.Blogs;
        } else {
            this.type = MaterialType.Both;
        }
        this.parseQueryParamsAndUpdate(route);
    }

    showActivateModal(index: number): void {
        this.selectedItemIndex = index;
        this.activateModal.show();
    }

    showDeleteModal(index: number): void {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    }

    hideModal(): void {
        this.selectedItemIndex = null;
        this.activateModal.hide();
        this.deleteModal.hide();
    }

    activate(): void {
        let result;

        let news = this.items[this.selectedItemIndex];
        this.materialService.activate(news.id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        news.pending = false;
                        this.hideModal();
                    }
                }
            );
    }

    delete(): void {
        console.log("delete");
        let result;
        this.materialService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    this.hideModal();
                    if (result) {
                        this.items.splice(this.selectedItemIndex, 1);
                    } else {
                        alert("Ошибка удаления")//bug temporary;
                    }
                }
            );
    }

    ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `${MaterialType[this.type].toLowerCase()}?page=${this.page}`;
        if (this.categoryId) {
            newUrl = `${newUrl}&categoryId=${this.categoryId}`;
        }
        if (this.userName) {
            newUrl = `${newUrl}&userName=${this.userName}`;
        }

        this.location.replaceState(newUrl);
    };

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

        this.materialService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
                error => console.log(error),
                () => {});
    }

    private parseQueryParamsAndUpdate(route: ActivatedRoute): void {
        let qParams = route.snapshot.queryParams;

        this.page = qParams["page"] || 1;
        this.categoryId = qParams["categoryId"] || "";
        this.userName = qParams["userName"] || "";
        this.update();
    }
}