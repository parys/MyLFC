import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { ChatMessage } from "./chatMessage.model";
import { ChatMessageService } from "./chatMessage.service";
import { Pageable } from "../shared/pageable.model";
import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "mini-chat",
    template: require("./miniChat.component.html")
})
export class MiniChatComponent implements OnInit, OnDestroy {
    messageForm: FormGroup;
    private sub: Subscription;
    items: ChatMessage[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;

    constructor(private service: ChatMessageService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
        this.update();
    }

    ngOnDestroy() {
    }


    delete(): void {

    }

    update(): void {
        this.service
            .getAll()
            .subscribe(data => this.items = data,
                error => console.log(error),
                () => {});
    }

    onSubmit(): void {
        console.log(this.messageForm.get("message"));
        console.log(this.messageForm.get("message").value);
        console.log(this.messageForm.value);
        console.log(this.messageForm.value);
        this.service.create(this.messageForm.value)
            .subscribe(data => this.items.unshift(data),
            (error) => console.log(error),
            () => { });
    }

    private initForm(): void {
        this.messageForm = this.formBuilder.group({
            'message': [
                "", Validators.compose([
                    Validators.required
                ])
            ]
        });
    }
}