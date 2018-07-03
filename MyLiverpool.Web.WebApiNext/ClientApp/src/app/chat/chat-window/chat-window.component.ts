import { Component, OnInit, ChangeDetectorRef, Input, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Configuration } from "@app/app.constants";
import { ChatMessage } from "@app/+common-models";
import { ChatMessageService } from "../chatMessage.service";
import { DeleteDialogComponent } from "@app/shared";
import { RolesCheckedService } from "@app/+auth";
import { SignalRService } from "@app/+signalr";
import { EditorComponent } from "@app/editor";

@Component({
    selector: "chat-window",
    templateUrl: "./chat-window.component.html",
    styleUrls: ["./chat-window.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {
    public messageForm: FormGroup;
    public items: ChatMessage[] = new Array<ChatMessage>();
    public selectedEditIndex: number = null;

    @ViewChild("chatInput") private elementRef: EditorComponent;
    @Input("type") public type: number;
    @Input() public height: number = 200;

    constructor(private service: ChatMessageService,
        private formBuilder: FormBuilder,
        private cd: ChangeDetectorRef,
        private snackBar: MatSnackBar,
        private configuration: Configuration,
        private sanitizer: DomSanitizer,
        public roles: RolesCheckedService,
        private dialog: MatDialog,
        private signalRService: SignalRService) {
    }

    public ngOnInit(): void {
        this.initForm();
        this.update();
        this.signalRService.chatSubject.subscribe((data: ChatMessage) => {
            if (this.type === data.type) {
                this.putToChat(data);
            }
        });
        this.roles.rolesChanged.subscribe(_ =>
            this.cd.markForCheck());
    }

    public update(): void {
        const id: number = this.items.length > 0 ? this.items[0].id : 0;
        this.service
            .getAll(id, this.type)
            .subscribe((data: ChatMessage[]) => {
                    this.items = data.concat(this.items);
                },
                error => console.log(error),
                () => {
                    this.cd.markForCheck();
                });
    }

    public onSubmit(): void {
        this.messageForm.markAsPending();
        if (this.selectedEditIndex != null) {
            const message: ChatMessage = this.items[this.selectedEditIndex];
            message.message = this.messageForm.get("message").value;
            this.service.update(message.id, message).subscribe(data => {

                    this.putToChat(data);
                    this.cancelEdit();
                },
                e => console.log(e));
        } else {
            const message: ChatMessage = this.messageForm.value;
            message.type = this.type;
            this.service.create(message)
                .subscribe(data => {
                        this.putToChat(data);
                    },
                    (e) => console.log(e));
        }
    }

    public showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.delete(index);
                }
            },
            e => console.log(e));
    }

    public addReply(index: number): void {
        let message: string = this.messageForm.get("message").value;
        let userName: string = this.items[index].authorUserName;
        let newMessage: string = `<i>${userName}</i>, ${message}`;
        this.messageForm.get("message").patchValue(newMessage);
        this.elementRef.setFocus();
        this.cd.markForCheck();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    public edit(index: number): void {
        this.selectedEditIndex = index;
        this.messageForm.get("message").patchValue(this.items[index].message);
    }

    public cancelEdit(): void {
        this.selectedEditIndex = null;
        this.messageForm.get("message").patchValue("");
        this.cd.markForCheck();
    }

    private delete(index: number): void {
        this.service.delete(this.items[index].id).subscribe(data => {
            if (data) {
                this.items.slice(index, 1);
                this.items = this.items.concat([]);
                this.snackBar.open("Комментарий успешно удален", null, { duration: 5000 });
            }
        },
            e => {
                console.log(e);
                this.snackBar.open("Комментарий НЕ удален", null, { duration: 5000 });
            }, () => {
                this.cd.markForCheck();
            });
    }

    private putToChat(message: ChatMessage): void {
        const index = this.items.findIndex(x => x.id === message.id);
        if (index !== -1) {
            this.items[index] = message;
        } else {
            this.items.unshift(message);
        }
        this.messageForm.get("message").patchValue("");
        this.cd.markForCheck();
    }

    private initForm(message: string = ""): void {
        this.messageForm = this.formBuilder.group({
            message: [message, Validators.compose([Validators.required, Validators.maxLength(this.configuration.maxChatMessageLength)])], //todo add visual warning
            typeId: [this.type, Validators.required]
        });
        this.messageForm.valueChanges.subscribe(() => {
            this.cd.markForCheck();
        });
    }
}