import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Location } from "@angular/common";
import { Subscription } from "rxjs/Subscription";
import { Pageable } from "../shared/pageable.model";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap";
import { MaterialCommentFilter } from "./materialCommentFilter.model";

@Component({
    selector: "materialComment-list",
    templateUrl: "./materialComment-list.component.html"
})

export class MaterialCommentListComponent implements OnInit, OnDestroy {
    sub: Subscription;
    sub2: Subscription;
    filterForm: FormGroup;
    items: MaterialComment[];
    page: number = 1;
    onlyUnverified: boolean = false;
    categoryId: number;
    userName: string;
    itemsPerPage = 15;
    totalItems: number;
    roles: IRoles;
    selectedItemIndex: number = undefined;
                                                              
    @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private materialCommentService: MaterialCommentService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
        private rolesChecked: RolesCheckedService) {
    }

    ngOnInit() {
        this.initForm();
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.queryParams.subscribe(qParams => {
                this.page = qParams["page"] || 1;
                this.categoryId = qParams["categoryId"] || "";
                this.userName = qParams["userName"] || "";
                this.onlyUnverified = qParams["onlyUnverified"] || false;
            },
            error => console.log(error));
        this.update();
    }

    ngOnDestroy(): void {
        if(this.sub) this.sub.unsubscribe();
        if(this.sub2) this.sub2.unsubscribe();
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
    };

    update(): void {
        let filters = new MaterialCommentFilter();
        filters.onlyUnverified = this.filterForm.get("onlyUnverified").value;
        filters.page = this.page;
        this.sub2 = this.materialCommentService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => {this.updateLocation();});
    }

    private updateLocation(): void {
        let newUrl = `materialComments?page=${this.page}`;
        if (this.categoryId) {
            newUrl = `${newUrl}&categoryId=${this.categoryId}`;
        }
        this.location.replaceState(newUrl);
    }

    private parsePageable(pageable: Pageable<MaterialComment>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    hideModal(): void {
        this.selectedItemIndex = undefined;
        this.deleteModal.hide();
    }

    verify(index: number): void {
        let result: boolean;
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe(data => result = data,
            error => console.log(error),
                () => {
                    if (result) {
                        this.items[index].isVerified = true;
                    }
                }
            );
    }

    showDeleteModal(index: number): void {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    }

    delete(): void {
        let result: boolean;
        this.materialCommentService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(res => result = res,
            e => console.log(e),
            () => {
                if (result) {
                    this.items.splice(this.selectedItemIndex, 1);
                    this.hideModal();
                }
            }
            );
    }

    private initForm(): void {
        this.filterForm = this.formBuilder.group({
            'onlyUnverified': [this.onlyUnverified]
        });
    }
}