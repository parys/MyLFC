import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { Pageable } from "../shared/pageable.model";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "materialComment-detail",
    template: require("./materialComment-detail.component.html")
})

export class MaterialCommentDetailComponent implements OnInit {

    @Input() item: MaterialComment;
    @Input() deep: number;
    @Input() canCommentary: boolean;
    @Input() materialId: number;
    @Input() parent: MaterialComment;

    commentForm: FormGroup;
    private oldCopy : MaterialComment;

    @ViewChild("addCommentModal") addCommentModal: ModalDirective;
    @ViewChild("editCommentModal") editCommentModal: ModalDirective;
    @ViewChild("deleteModal") deleteModal: ModalDirective;
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

    ngOnInit(): void{
        this.roles = this.rolesChecked.checkRoles();
        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                Validators.required])],
            'answer': ["", Validators.compose([
                Validators.required])]
        });
    }

    showAddCommentModal(index: number): void {
        this.addCommentModal.show();
    }

    hideModal(): void {                                          
        this.addCommentModal.hide();
        this.hideEditModal();
        this.deleteModal.hide();
    }

    showDeleteModal(index: number): void {
        this.deleteModal.show();
    }

    hideEditModal() {  
        this.editCommentModal.hide();
        this.cleanControls();
    }

    addComment(value: any): void {
        let comment = this.getComment();
        this.materialCommentService.create(comment)
            .subscribe(data => {
                this.item.children.push(data);
                this.cleanControls();
                this.addCommentModal.hide();   
            },
            error => console.log(error),
            () => {});
    }


    delete(): void {
        let result;
        this.materialCommentService.delete(this.item.id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.item.children.forEach(x => {
                            if (this.parent) {
                                x.parentId = this.parent.id;
                                this.parent.children.push(x);
                            } else {
                                x.parentId = undefined;
                            }
                        });
                        this.item = undefined;

                        // this.items.splice(this.selectedItemIndex, 1);
                        this.hideModal();
                    }
                }
            );
    }

    showEditModal(): void {
        this.commentForm.patchValue(this.item);
        this.editCommentModal.show();
    }

    edit(): void {
        let comment = this.getComment();
        comment.answer = this.commentForm.controls["answer"].value;
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(data => {
                this.item = comment;
                this.hideEditModal();
                },
            error => console.log(error),
            () => { });
    }

    private getComment(): MaterialComment {
        let comment = this.item;
        comment.message = this.commentForm.controls["message"].value;
        return comment;
    }

    private cleanControls(): void {    
        this.commentForm.controls["message"].patchValue("");
        this.commentForm.controls["message"].updateValueAndValidity();
        this.commentForm.controls["answer"].patchValue("");
        this.commentForm.controls["answer"].updateValueAndValidity();
    }
}