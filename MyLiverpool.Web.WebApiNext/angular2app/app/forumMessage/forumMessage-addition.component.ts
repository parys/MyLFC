import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { Pageable } from "../shared/pageable.model";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ForumMessage } from "./forumMessage.model";
import { ForumMessageService } from "./forumMessage.service";
import { Location } from "@angular/common";
import { RolesCheckedService, IRoles } from "../shared/index";
//import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "forumMessage-addition",
    template: require("./forumMessage-addition.component.html")
})
export class ForumMessageAdditionComponent implements OnInit {
                                     
    roles: IRoles;
    commentForm: FormGroup;                  
    @Input() themeId: number;
    @Output() newMessage = new EventEmitter<ForumMessage>();                   

    constructor(private service: ForumMessageService, private rolesChecked: RolesCheckedService,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();

        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([Validators.required,
            Validators.minLength(3)])]
        });
    }

    onSubmit(): void {
        var comment = new ForumMessage();
        comment.message = this.commentForm.controls["message"].value;
        comment.themeId = this.themeId;
        this.service.create(comment)
            .subscribe(data => {
                    this.newMessage.emit(data);
                    this.commentForm.reset();
                },
                error => console.log(error),
                () => {}
            );
    }
}