import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Configuration } from "../app.constants";
import { ChatMessage } from "./chatMessage.model";
import { ChatMessageService } from "./chatMessage.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "mini-chat",
    templateUrl: "./miniChat.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniChatComponent implements OnInit {
    public messageForm: FormGroup;
    public items: ChatMessage[];
    public page: number = 1;
    public roles: IRoles;
        
    constructor(private service: ChatMessageService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private cd: ChangeDetectorRef,
        private configuration: Configuration,
        private sanitizer: DomSanitizer,
        private rolesChecked: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        this.update();
    }

    public update(): void {
        this.service
            .getAll()
            .subscribe(data => {
                this.items = data;
                },
                error => console.log(error), () => {
                this.cd.markForCheck();
                });
    }

    public onSubmit(): void {
        this.service.create(this.messageForm.value)
            .subscribe(data => {
                this.items.unshift(data);
                this.messageForm.get("message").patchValue("");
                },
            (error) => console.log(error));
    }

    public addReply(index: number): void {
        let message: string = this.messageForm.get("message").value;
        let userName: string = this.items[index].authorUserName;
        let newMessage: string = `<i>${userName}</i>, ${message}`;
        this.messageForm.get("message").patchValue(newMessage);
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    private initForm(message: string = ""): void {
        this.messageForm = this.formBuilder.group({
            'message': [message || "", Validators.compose([Validators.required, Validators.maxLength(this.configuration.maxChatMessageLength)])] //todo add visual warning
        });
        this.messageForm.valueChanges.subscribe(() => {
            this.cd.markForCheck();
        });
    }
}