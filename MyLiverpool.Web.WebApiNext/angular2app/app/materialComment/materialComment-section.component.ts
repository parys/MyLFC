import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
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

    items: MaterialComment[] = [];
    page: number = 1;
    itemsPerPage = 15;
    totalItems: number;
    roles: IRoles;
    commentAddForm: FormGroup;
    @Input() materialId: number;
    @Input() canCommentary: boolean = false;
                            

    constructor(private materialCommentService: MaterialCommentService, private location: Location, private rolesChecked: RolesCheckedService
        , private formBuilder: FormBuilder) {   
    }   

    ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles(); this.commentAddForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                Validators.required, Validators.minLength(3)])]
        });       
        this.update();
    }


    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
      //  let newUrl = `materialComment/list/${this.page}`;
        //   if (this.categoryId) {
        //        newUrl = `${newUrl}/${this.categoryId}`;
        //    }
     //   this.location.replaceState(newUrl);
    };

    update(): void {
        this.materialCommentService
            .getAllByMaterial(this.page, this.materialId)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error));
    }

    private parsePageable(pageable: Pageable<MaterialComment>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    onSubmit(): void {
        var comment = new MaterialComment();
        comment.message = this.commentAddForm.controls["message"].value;
        comment.materialId = this.materialId;
        this.materialCommentService.create(comment)
            .subscribe(data => {
                    this.items.push(data);
                    this.totalItems += 1;
                    // this.commentAddForm.controls["message"].patchValue("");
                    this.commentAddForm.controls["message"].patchValue("");
                },
                error => console.log(error));
    }
}
