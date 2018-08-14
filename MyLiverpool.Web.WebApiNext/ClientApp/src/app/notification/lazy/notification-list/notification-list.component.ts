import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Notification } from "@app/notification/model";
import { NotificationService } from "@app/notification/core";

@Component({
        selector: "notification-list",
        templateUrl: "./notification-list.component.html",
        styleUrls: ["./notification-list.component.scss"]
    })

export class NotificationListComponent implements OnInit {
    public items: Notification[];

    constructor(private service: NotificationService,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.service
            .getAll()
            .subscribe(data => this.items = data,
            e => console.log(e));
    }

    public read(index: number): void {
        if (!this.items[index].isRead) {
            this.service.read([this.items[index].id]).subscribe(res => {
                if (res) {  
                    this.items[index].isRead = true;
                }
            },
                e => {
                    console.log(e);
                });
        }
    }

    public readAll(): void {
        this.service.read(this.items.filter(x => !x.isRead).map(x => x.id)).subscribe(res => {
                if (res) {
                    this.items.forEach(x => x.isRead = true);
                }
            },
            e => {
                console.log(e);
            });
    }

    public readAndGo(index: number): void {
        this.read(index);
        this.goToNotification(index);
    }

    private goToNotification(index: number): void {
        this.router.navigate([`/${this.items[index].typeName}/${this.items[index].entityId}`], { fragment: this.items[index].commentId ? `com${this.items[index].commentId}` : "" });
    }

    private readArray(ids: number[]): boolean {
        this.service.read(ids).subscribe(res => {
            if (res && ids.length > 1) {
                this.items.forEach(x => x.isRead = true);
            }
            return res;
        },
            e => {
                console.log(e);
            });
        return false;
    }
}