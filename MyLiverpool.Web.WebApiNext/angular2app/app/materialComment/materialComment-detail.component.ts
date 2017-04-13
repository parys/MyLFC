import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
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

    roles: IRoles;                

    constructor(private materialCommentService: MaterialCommentService,
        private location: Location,
        private sanitizer: DomSanitizer,
        private rolesChecked: RolesCheckedService,
        private formBuilder: FormBuilder) {
    }

    ngOnInit(): void{
        this.roles = this.rolesChecked.checkRoles();
    }

    showAddCommentModal(): void {
        this.initForm();
        this.addCommentModal.show();
    }

    showEditModal(): void {
        this.initForm();
        this.commentForm.patchValue(this.item);
        this.editCommentModal.show();
    }

    showDeleteModal(): void {
        this.deleteModal.show();
    }

    hideAddModal(): void {
        this.commentForm = null;                                   
        this.addCommentModal.hide();
    }
 

    hideDeleteModal(): void {      
        this.deleteModal.hide();
    }

    hideEditModal() {
        this.commentForm = null;
        this.editCommentModal.hide();
    }

    addComment(): void {
        let comment = this.getNewComment();
        this.materialCommentService.create(comment)
            .subscribe(data => {
                this.item.children.push(data);   
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
                        this.hideDeleteModal();
                    }
                }
            );
    }

    editComment(): void {
        let comment = this.getComment();
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(data => {
                this.item = comment;
                this.hideEditModal();
                },
            error => console.log(error));
    }
    
    sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }


    private initForm() {
        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                Validators.required])],
            'answer': [""]
        });                                        
    }

    private getComment(): MaterialComment {
        let comment = this.item;
        comment.message = this.commentForm.controls["message"].value;
        comment.answer = this.commentForm.controls["answer"].value;
        return comment;
    }

    private getNewComment(): MaterialComment {
        let comment = new MaterialComment();
        comment.message = this.commentForm.controls["message"].value;
        comment.materialId = this.materialId;
        comment.parentId = this.item.id;
        return comment;
    }
}                                                                                                                