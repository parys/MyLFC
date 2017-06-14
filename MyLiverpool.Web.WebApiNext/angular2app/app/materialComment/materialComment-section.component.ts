import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked } from "@angular/core";
import { Pageable } from "../shared/pageable.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { Location } from "@angular/common";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "comments",
    templateUrl: "./materialComment-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialCommentSectionComponent implements OnInit {
    public items: MaterialComment[] = [];
    public page: number = 1;
    public itemsPerPage: number = 50;
    public totalItems: number;
    public roles: IRoles;
    public commentAddForm: FormGroup;
    @Input() public  materialId: number;
    @Input() public  canCommentary: boolean = false;

    constructor(private materialCommentService: MaterialCommentService,
        private location: Location,
        private cd: ChangeDetectorRef,
        private rolesChecked: RolesCheckedService
        , private formBuilder: FormBuilder) {   
    }   

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.commentAddForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                Validators.required, Validators.minLength(3)])]
        });
        this.commentAddForm.valueChanges.subscribe(() => {
                this.cd.markForCheck();
            }
        );
        this.update();
        this.cd.markForCheck();
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    };

    public update(): void {
        this.materialCommentService
            .getAllByMaterial(this.page, this.materialId)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error), () =>
                {
                    this.cd.markForCheck();
                });
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
        this.materialCommentService.create(comment)
            .subscribe(data => {
                    this.items.push(data);
                    this.totalItems += 1;
                    this.commentAddForm.controls["message"].patchValue("");
                },
                error => console.log(error),
                () => {
                    this.cd.markForCheck();
                });
    }
}
