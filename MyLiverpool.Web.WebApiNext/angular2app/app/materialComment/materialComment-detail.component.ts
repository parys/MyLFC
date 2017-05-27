import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { MdDialog } from '@angular/material';
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { RolesCheckedService, IRoles, DeleteDialogComponent } from "../shared/index";

@Component({
    selector: "materialComment-detail",
    templateUrl: "./materialComment-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MaterialCommentDetailComponent implements OnInit {
    @Input() public item: MaterialComment;
    @Input() public deep: number;
    @Input() public canCommentary: boolean;
    @Input() public materialId: number;
    @Input() public parent: MaterialComment;

    public commentForm: FormGroup;          
    private oldCopy: MaterialComment;
    public isEditMode: boolean = false;
    public isAddingMode: boolean = false;

    public roles: IRoles;                

    constructor(private materialCommentService: MaterialCommentService,
        private location: Location,
        private sanitizer: DomSanitizer,
        private rolesChecked: RolesCheckedService,
        private dialog: MdDialog,
        private cd: ChangeDetectorRef,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
    }

    public showAddCommentModal(): void {
        this.isAddingMode = true;
        this.updateFormValues();
    }

    public showEditModal(): void {
        this.isEditMode = true;
        this.updateFormValues();
    }

    public showDeleteModal(): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete();
            }
        }, e => console.log(e));
    }

    public cancelAdding(): void {
        this.isAddingMode = false;
        this.updateFormValues();//does it need
      //  this.cd.markForCheck();
        this.cd.detectChanges();
    }

    public addComment(): void {
        let comment = this.getNewComment();
        this.materialCommentService.create(comment)
            .subscribe(data => {
                this.item.children.push(data);
                this.cancelAdding();
                },
            error => console.log(error));
    }

    public editComment(): void {
        let comment = this.getComment();
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(data => {
                this.item = comment;
                this.cancelEdit();
                },
            error => console.log(error));
    }

    public cancelEdit(): void {
        this.isEditMode = false;
        this.updateFormValues();//does it need
     //   this.cd.markForCheck();
        this.cd.detectChanges();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    private delete(): void {
        let result: boolean;
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
                    }

            //        this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            );
    }

    private initForm(): void {
        let message = this.isEditMode ? this.item.message : "";
        let answer = this.isEditMode ? this.item.answer : "";
        this.commentForm = this.formBuilder.group({
            'message': [message, Validators.required],
            'answer': [answer]
        });
        this.commentForm.valueChanges.subscribe(() => {
     //       this.cd.markForCheck();
     //       this.cd.detectChanges();
        });
    }
    private updateFormValues(): void {
        let message = this.isEditMode ? this.item.message : "";
        let answer = this.isEditMode ? this.item.answer : "";
        this.commentForm.get("message").patchValue(message);
        this.commentForm.get("answer").patchValue(answer);
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