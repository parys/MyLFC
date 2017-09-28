﻿import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Pageable } from "../../shared/pageable.model";
import { Comment as MaterialComment } from "../materialComment.model";
import { MaterialCommentService } from "../materialComment.service";
import { RolesCheckedService, IRoles } from "../../shared/index";

@Component({
    selector: "comment-section",
    templateUrl: "./comment-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSectionComponent implements OnInit, OnChanges {
    public items: MaterialComment[] = [];
    public page: number = 1;
    public itemsPerPage: number = 50;
    public totalItems: number = 0;
    public roles: IRoles;
    public commentAddForm: FormGroup;
    @Input() public materialId: number;
    @Input() public matchId: number;
    @Input() public type: number;
    @Input() public canCommentary: boolean = false;

    constructor(private materialCommentService: MaterialCommentService,
        private cd: ChangeDetectorRef,
        private rolesChecked: RolesCheckedService
        , private formBuilder: FormBuilder) {   
    }   

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.commentAddForm = this.formBuilder.group({
            message: ["", Validators.minLength(3)]
        });
        this.commentAddForm.valueChanges.subscribe(() => {
                this.cd.markForCheck();
            }
        );
        this.update();
        this.cd.markForCheck();
        this.type = this.type ? this.type : 3;
    }

    public ngOnChanges(): void {
        this.update();
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    };

    public update(): void {
        if (this.materialId) {
            this.materialCommentService
                .getAllByMaterial(this.page, this.materialId)
                .subscribe(data => this.parsePageable(data),
                    e => console.log(e),
                    () => {
                        this.cd.markForCheck();
                    });
        } else if (this.matchId) {
            this.materialCommentService
                .getAllByMatch(this.page, this.matchId)
                .subscribe(data => this.parsePageable(data),
                    e => console.log(e),
                    () => {
                        this.cd.markForCheck();
                    });
        }
    }

    private parsePageable(pageable: Pageable<MaterialComment>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    public onSubmit(): void {
        this.commentAddForm.markAsPending();
        const comment: MaterialComment = this.commentAddForm.value;
        comment.materialId = this.materialId;
        comment.matchId = this.matchId;
        comment.type = this.type ? this.type : 3;//todo
        this.materialCommentService.create(comment)
            .subscribe(data => {
                    this.items.push(data);
                    this.totalItems += 1;
                    this.commentAddForm.controls["message"].patchValue("");
                },
                e => console.log(e),
                () => {
                    this.cd.markForCheck();
                });
    }
}