import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ForumMessageService, ForumMessage } from '@forum/forumMessage';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '@auth/store';

@Component({
    selector: 'forumMessage-addition',
    templateUrl: 'forumMessage-addition.component.html',
    styleUrls: ['forumMessage-addition.component.scss']
})
export class ForumMessageAdditionComponent implements OnInit {

    commentForm: FormGroup;
    @Input() themeId: number;
    @Output() newMessage = new EventEmitter<ForumMessage>();

    @Select(AuthState.isLogined) isLogined$: Observable<boolean>;

    constructor(private service: ForumMessageService,
                private formBuilder: FormBuilder) {
    }

    public ngOnInit(): void {
        this.commentForm = this.formBuilder.group({
            message: ['', Validators.compose([Validators.required,
            Validators.minLength(3)])]
        });
    }

    public onSubmit(): void {
        const comment = new ForumMessage();
        comment.message = this.commentForm.controls['message'].value;
        comment.themeId = this.themeId;
        this.service.create(comment)
            .subscribe(data => {
                    this.newMessage.emit(data);
                    this.commentForm.reset();
                }
            );
    }
}
