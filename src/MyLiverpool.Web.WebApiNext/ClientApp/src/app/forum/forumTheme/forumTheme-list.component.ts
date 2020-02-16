import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription, Observable } from 'rxjs';

import { ForumThemeService, ForumTheme } from '@forum/forumTheme';
import { ForumMessage, ForumMessageService } from '@forum/forumMessage';
import { ObserverComponent } from '@domain/base';
import { AuthState } from '@auth/store';
import { Select } from '@ngxs/store';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';

@Component({
    selector: 'forumTheme-list',
    templateUrl: './forumTheme-list.component.html'
})
export class ForumThemeListComponent extends ObserverComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public item: ForumTheme;
    public items: ForumMessage[];
    public page = 1;
    public itemsPerPage = 15;
    public totalItems: number;
    public commentForm: FormGroup;
    public isEditMode = false;
    public selectedCommentIndex: number = null;

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;

    @Select(AuthState.isModerator) isModerator$: Observable<boolean>;

    constructor(private service: ForumThemeService,
                private messageService: ForumMessageService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private location: Location,
                private notifier: NotifierService) {

        super();
    }

    public ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
            this.page = +qParams['page'] || 1;
        });
        this.update(+this.route.snapshot.params['id']);
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update(this.item.id);
        const newUrl = `forum/${this.item.subsectionId}/themes/${this.item.id}?page=${this.page}`;

        this.location.replaceState(newUrl);
    }

    public addNewMessage(message: ForumMessage) {
        this.items.push(message);
        this.totalItems += 1;
    }

    public showEditModal(index: number): void {
        this.isEditMode = true;
        this.selectedCommentIndex = index;
        this.initForm(index);
    }

    public hideEditModal() {
        this.commentForm = null;
        this.isEditMode = false;
    }
    public showDeleteModal(index: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
        this.subscriptions.push(sub$);
    }

    public editComment(index: number): void {
        const comment = this.items[index];
        comment.message = this.commentForm.get('message').value;
        this.messageService.update(comment.id, comment)
            .subscribe((data: ForumMessage) => {
                this.items[index].message = data.message;
                this.items[index].lastModifiedTime = data.lastModifiedTime;
                this.hideEditModal();
            });
    }

    private delete(index: number): void {
        this.messageService.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                if (res) {

                    this.items.splice(index, 1);
                    this.totalItems -= 1;
                }
            });
    }

    private initForm(index: number = null) {
        const initValue = index !== null ? this.items[index].message : '';
        this.commentForm = this.formBuilder.group({
            message: [initValue, Validators.required]
        });
    }

    private update(id: number): void {
        this.service.getSingleWithMessages(id, this.page)
            .subscribe(data => {
                this.item = data;
                this.itemsPerPage = data.messages.pageSize;
                this.items = data.messages.results;
                this.totalItems = data.messages.rowCount;
            });
    }
}
