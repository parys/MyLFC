﻿import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { MatDialog } from "@angular/material";
import { Subscription } from "rxjs/Subscription"
import { Comment } from "../comment.model";
import { CommentVote } from "../commentVote.model";
import { CommentService } from "../comment.service";
import { RolesCheckedService, DeleteDialogComponent } from "@app/shared";

@Component({
    selector: "comment-detail",
    templateUrl: "./comment-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentDetailComponent implements OnInit, OnDestroy {
    private vote$: Subscription;
    @Input() public item: Comment;
    @Input() public deep: number;
    @Input() public canCommentary: boolean;
    @Input() public materialId: number;
    @Input() public matchId: number;
    @Input() public parent: Comment;
    @Input() public type: number;

    public commentForm: FormGroup;          
    private oldCopy: Comment;
    public isEditMode: boolean = false;
    public isAddingMode: boolean = false;

    constructor(private materialCommentService: CommentService,
        private location: Location,
        private sanitizer: DomSanitizer,
        public roles: RolesCheckedService,
        private dialog: MatDialog,
        private cd: ChangeDetectorRef,
        private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.initForm();
    }

    public ngOnDestroy(): void {
        if(this.vote$) { this.vote$.unsubscribe(); }
    }

    public verify(): void {
        let result: boolean;
        this.materialCommentService
            .verify(this.item.id)
            .subscribe(data => result = data,
                error => console.log(error),
                () => {
                    if (result) {
                        this.item.isVerified = true;
                        this.cd.markForCheck();
                    }
                });
    }

    public showAddCommentModal(): void {
        this.isAddingMode = true;
        this.initForm();
    }

    public showEditModal(): void {
        this.isEditMode = true;
        this.initForm();
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
        this.cd.markForCheck();
    }

    public addComment(): void {
        this.commentForm.markAsPending();
        let comment = this.getNewComment();
        this.materialCommentService.create(comment)
            .subscribe(data => {
                this.item.children.push(data);
                this.cancelAdding();
                },
            e => console.log(e));
    }

    public vote(positive: boolean): void {
        const vote: CommentVote = new CommentVote();
        vote.positive = positive;
        vote.commentId = this.item.id;
        this.vote$ = this.materialCommentService.vote(vote).subscribe(data => {
                if (data) {
                    this.updateVotes(positive);
                    //todo add snackBar комментарий оценен
                }
            },
            e => console.log(e));
    }

    private updateVotes(positive: boolean): void {
        if (positive) {
            this.item.positiveCount += 1;
            if (!this.item.canNegativeVote) {
                this.item.negativeCount += 1;
            }
            this.item.canPositiveVote = false;
            this.item.canNegativeVote = true;
        } else {
            this.item.negativeCount -= 1;
            if (!this.item.canPositiveVote) {
                this.item.positiveCount -= 1;
            }
            this.item.canPositiveVote = true;
            this.item.canNegativeVote = false;
        }
        this.cd.markForCheck();
    }

    public editComment(): void {
        this.commentForm.markAsPending();
        const comment: Comment = this.getComment();
        this.materialCommentService.update(this.item.id, comment)
            .subscribe(data => {
                this.item = comment;
                this.cancelEdit();
                },
            e => console.log(e));
    }

    public cancelEdit(): void {
        this.isEditMode = false;
        this.cd.markForCheck();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    private delete(): void {
        this.materialCommentService.delete(this.item.id)
            .subscribe(res => {
                if (res) {
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
            },
                e => console.log(e),
                () => {
                    this.cd.detectChanges();
                }
            );
    }

    private initForm(): void {
        const message: string = this.isEditMode ? this.item.message : "";
        const answer: string = this.isEditMode ? this.item.answer : "";
        this.commentForm = this.formBuilder.group({
            message: [message, Validators.required],
            answer: [answer]
        });
        this.commentForm.valueChanges.subscribe(() => {
            this.cd.markForCheck();
        });
    }

    private getComment(): Comment {
        const comment: Comment = this.item;
        comment.message = this.commentForm.controls["message"].value;
        comment.answer = this.commentForm.controls["answer"].value;
        return comment;
    }

    private getNewComment(): Comment {
        const comment: Comment = new Comment();
        comment.message = this.commentForm.controls["message"].value;
        comment.materialId = this.materialId;
        comment.matchId = this.matchId;
        comment.parentId = this.item.id;
        comment.type = this.type;
        return comment;
    }
}                                                                                                                