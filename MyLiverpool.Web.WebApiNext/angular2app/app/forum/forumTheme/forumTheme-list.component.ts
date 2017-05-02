import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";      
import { Observable } from "rxjs/Observable";
import { ForumThemeService } from "./forumTheme.service";
import { ForumMessage, ForumMessageService } from "../forumMessage/index";
import { ForumTheme } from "./forumTheme.model";
import { RolesCheckedService, IRoles } from "../../shared/index";
import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "forumTheme-list",
    templateUrl: "./forumTheme-list.component.html"
})
export class ForumThemeListComponent implements OnInit {
    item: ForumTheme;
    items: ForumMessage[];
    roles: IRoles;         
    page: number = 1;
    itemsPerPage = 15;
    totalItems: number;
    @ViewChild("editCommentModal") editCommentModal: ModalDirective;
    @ViewChild("deleteModal") deleteModal: ModalDirective;
    commentForm: FormGroup;
    selectedItemIndex: number = null;     

    constructor(private service: ForumThemeService,
        private messageService: ForumMessageService,
        private rolesChecked: RolesCheckedService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.page = +this.route.snapshot.queryParams["page"] || 1;
        this.update(+this.route.snapshot.params["id"]);
    };

    ngOnDestroy() {
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update(this.item.id);
        let newUrl = `forum/themes/${this.item.id}?page=${this.page}`;

        this.location.replaceState(newUrl);
    };

    addNewMessage(message: ForumMessage) {
        this.items.push(message);
        this.totalItems += 1;
    }

    showEditModal(index: number): void {
        this.selectedItemIndex = index;
        this.initForm(index);
       // this.commentForm.patchValue();
        this.editCommentModal.show();
    }

    hideEditModal() {
        this.commentForm = null;
        this.selectedItemIndex = null;
        this.editCommentModal.hide();
    }
    showDeleteModal(index: number): void {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    }

    hideDeleteModal(): void {
        this.deleteModal.hide();
    }

    editComment(): void {
        let comment = this.items[this.selectedItemIndex];
        comment.message = this.commentForm.get("message").value;
        this.messageService.update(comment.id, comment)
            .subscribe(data => {
                this.items[this.selectedItemIndex].message = data.message;
                this.items[this.selectedItemIndex].lastModifiedTime = data.lastModifiedTime;
                this.hideEditModal();
            },
            error => console.log(error),
            () => { });
    }

    delete(): void {
        let result : boolean;
        this.messageService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(res => result = res,
            e => console.log(e),
            () => {
                if (result) {
                    this.items.splice(this.selectedItemIndex, 1);

                    // this.items.splice(this.selectedItemIndex, 1);
                    this.hideDeleteModal();
                }
            }
            );
    }

    private initForm(index: number = null) {
        let initValue = index !== null ? this.items[index].message : "";
        this.commentForm = this.formBuilder.group({
            'message': [initValue, Validators.compose([
                Validators.required])]
        });
    }

    private update(id: number) {
        this.service.getSingleWithMessages(id, this.page)
            .subscribe(data => {
                this.item = data;
                this.itemsPerPage = data.messages.itemPerPage;
                this.items = data.messages.list;
                this.totalItems = data.messages.totalItems;
            },
            error => console.log(error),
            () => { });
    }
}