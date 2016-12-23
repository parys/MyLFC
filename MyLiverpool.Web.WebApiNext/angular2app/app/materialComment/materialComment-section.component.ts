import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Pageable } from "../shared/pageable.model";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MaterialComment } from "./materialComment.model";
import { MaterialCommentService } from "./materialComment.service";
import { Location } from "@angular/common";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "comments",
    template: require("./materialComment-section.component.html")
})
export class MaterialCommentSectionComponent implements OnInit {

    items: MaterialComment[] = [];
    page: number = 1;
    itemsPerPage = 15;
    totalItems: number;
    roles: IRoles;
    commentForm: FormGroup;
    //selectedItemIndex: number = undefined;
    @Input() materialId: number;
    @Input() canCommentary: boolean = false;
                            

    constructor(private materialCommentService: MaterialCommentService, private location: Location, private rolesChecked: RolesCheckedService
        , private formBuilder: FormBuilder) {   
    }   

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();     
        this.update(); 

        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([
                Validators.required, Validators.minLength(3)])]
        });    
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

    private update(): void {
        this.materialCommentService
            .getAllByMaterial(this.page, this.materialId)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => {});
    }

    private parsePageable(pageable: Pageable<MaterialComment>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }                                 

    onSubmit(value: any): void {
        var comment = new MaterialComment();
        comment.message = this.commentForm.controls["message"].value;
        comment.materialId = this.materialId;
        this.materialCommentService.create(comment)
            .subscribe(data => {
                this.items.push(data);
                this.commentForm.controls["message"].patchValue("");
                },
                error => console.log(error),
                () => {}
            );

    }

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

    //delete() {
    //    let result;
    //    this.materialCommentService.delete(this.items[this.selectedItemIndex].id)
    //        .subscribe(res => result = res,
    //        e => console.log(e),
    //        () => {
    //            if (result) {
    //                this.items.splice(this.selectedItemIndex, 1);
    //                this.hideModal();
    //            }
    //        }
    //        );
    //}
}
