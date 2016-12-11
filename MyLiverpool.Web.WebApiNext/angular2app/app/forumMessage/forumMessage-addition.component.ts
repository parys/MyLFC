import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Pageable } from "../shared/pageable.model";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ForumMessage } from "./forumMessage.model";
import { ForumMessageService } from "./forumMessage.service";
import { Location } from "@angular/common";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: "forumMessage-addition",
    template: require("./forumMessage-addition.component.html")
})
export class ForumMessageAdditionComponent implements OnInit {

   // items: MaterialComment[] = [];
    roles: IRoles;
    commentForm: FormGroup;
    //selectedItemIndex: number = undefined;
    @Input() themeId: number;                   

    constructor(private service: ForumMessageService, private rolesChecked: RolesCheckedService,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;

        this.commentForm = this.formBuilder.group({
            'message': ["", Validators.compose([Validators.required,
            Validators.minLength(3)])]
        });
    }

    onSubmit(value: any): void {
        var comment = new ForumMessage();
        comment.message = this.commentForm.controls["message"].value;
        comment.themeId = this.themeId;
        this.service.create(comment)
            .subscribe(data => {
                    //  this.items.push(data);
                    this.commentForm.controls["message"].patchValue("");
                },
                error => console.log(error),
                () => {}
            );
    }
}