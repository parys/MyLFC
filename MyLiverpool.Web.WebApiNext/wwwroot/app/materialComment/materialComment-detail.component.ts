import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { Pageable } from "../shared/pageable.model";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: "materialComment-detail",
    templateUrl: "app/materialComment/materialComment-detail.component.html"
})

export class MaterialCommentDetailComponent implements OnInit {

    @Input() item: MaterialComment;
    @Input() deep: number;
    @Input() canCommentary: boolean = false;
    @Input() materialId: number;
    commentForm: FormGroup;

    @ViewChild("addCommentModal") addCommentModal: ModalDirective;
   // page: number = 1;
   // itemsPerPage = 15;
   // totalItems: number;
    roles: IRoles;
  //  selectedItemIndex: number = undefined;

  //  @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private materialCommentService: MaterialCommentService,
        private location: Location,
        private rolesChecked: RolesCheckedService,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;
        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                Validators.required])]
        });
    }

    showAddCommentModal(index: number): void {
        this.addCommentModal.show();
    }

    hideModal(): void {
        console.log(this.commentForm.controls["message"].value);
        this.addCommentModal.hide(); 
    }

    addComment(value: any): void {
        var comment = new MaterialComment();
        comment.message = this.commentForm.controls["message"].value;
        comment.materialId = this.materialId;
        comment.parentId = this.item.id;
        this.materialCommentService.create(comment)
            .subscribe(data => {
                this.item.children.push(data);
                this.commentForm.controls["message"].patchValue("");
                this.commentForm.controls["message"].updateValueAndValidity();
                this.addCommentModal.hide();   
            },
            error => console.log(error),
            () => {});

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
      //  this.materialCommentService.delete(this.items[index].id).subscribe(data => data,
      //      error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
     }
}