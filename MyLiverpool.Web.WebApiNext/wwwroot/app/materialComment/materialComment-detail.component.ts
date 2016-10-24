import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Pageable } from "../shared/pageable.model";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { Location } from "@angular/common";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: "materialComment-detail",
    templateUrl: "app/materialComment/materialComment-detail.component.html"
})

export class MaterialCommentDetailComponent implements OnInit {

    @Input() item: MaterialComment;
    @Input() deep: number;
   // page: number = 1;
   // itemsPerPage = 15;
   // totalItems: number;
    roles: IRoles;
  //  selectedItemIndex: number = undefined;

  //  @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private materialCommentService: MaterialCommentService,
        private location: Location,
        private rolesChecked: RolesCheckedService) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;
        //this.update();
    }

    //pageChanged(event: any): void {
    //    this.page = event.page;
    //    this.update();
    //    let newUrl = `materialComment/list/${this.page}`;
    //    //   if (this.categoryId) {
    //    //        newUrl = `${newUrl}/${this.categoryId}`;
    //    //    }
    //    this.location.replaceState(newUrl);
    //};

    //private update(): void {
    //    this.materialCommentService
    //        .getAll(this.page)
    //        .subscribe(data => this.parsePageable(data),
    //        error => console.log(error),
    //        () => console.log("success load comment lits"));
    //}

    //private parsePageable(pageable: Pageable<MaterialComment>): void {
    //    this.items = pageable.list;
    //    this.page = pageable.pageNo;
    //    this.itemsPerPage = pageable.itemPerPage;
    //    this.totalItems = pageable.totalItems;
    //}

    //hideModal(): void {
    //    this.selectedItemIndex = undefined;
    //    this.deleteModal.hide();
    //}

    //verify(index: number): void {
    //    let result;
    //    this.materialCommentService
    //        .verify(this.items[index].id)
    //        .subscribe(data => result = data,
    //        error => console.log(error),
    //        () => {
    //            if (result) {
    //                this.items[index].isVerified = true;
    //            }
    //        }
    //        );
    //}

    //showDeleteModal(index: number): void {
    //    this.selectedItemIndex = index;
    //    this.deleteModal.show();
    //}

    delete() {
        let result;
        this.materialCommentService.delete(this.item.id)
            .subscribe(res => result = res,
            e => console.log(e),
            () => {
                if (result) {
                    this.item = undefined;
                    // this.items.splice(this.selectedItemIndex, 1);
                    // this.hideModal();
                }
            }
            );
    }

    edit() {
        console.log("edit");
      //  this.materialCommentService.delete(this.items[index].id).subscribe(data => data,
      //      error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
     }
}