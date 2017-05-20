import { Component, OnInit} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Configuration } from "../app.constants";
import { ChatMessage } from "./chatMessage.model";
import { ChatMessageService } from "./chatMessage.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "mini-chat",
    templateUrl: "./miniChat.component.html"
})
export class MiniChatComponent implements OnInit {
    public messageForm: FormGroup;
    public items: ChatMessage[];
    public page: number = 1;
    public roles: IRoles;
        
    constructor(private service: ChatMessageService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private configuration: Configuration,
        private rolesChecked: RolesCheckedService) {
    }

    public ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        this.update();
    }

    public update(): void {
        this.service
            .getAll()
            .subscribe(data => this.items = data,
                error => console.log(error));
    }

    public onSubmit(): void {
        this.service.create(this.messageForm.value)
            .subscribe(data => {
                this.items.unshift(data);
                this.messageForm.reset();
                },
            (error) => console.log(error));
    }

    public addReply(index: number): void {
        let message: string = this.messageForm.get("message").value;
        let userName: string = this.items[index].authorUserName;
        let newMessage: string = `<i>${userName}</i>, ${message}`;
        this.messageForm.get("message").patchValue(newMessage);
    }

    private initForm(message: string = null): void {
        this.messageForm = this.formBuilder.group({
            'message': [message || "", Validators.compose([Validators.required, Validators.maxLength(this.configuration.maxChatMessageLength)])] //todo add visual warning
        });
    }
}