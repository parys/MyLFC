import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Notification } from "../notification.model";
import { NotificationService } from "../notification.service";

@
Component({
    selector: "notification-list",
    templateUrl: "./notification-list.component.html",
    styleUrls: ["./notification-list.component.css"]
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
            this.service.read(this.items[index].id).subscribe(res => {
                this.items[index].isRead = true;
            },
                e => console.log(e));
        }
    }

    public readAndGo(index: number): void {
        this.read(index);
        this.goToNotification(index);        
    }
    
    private goToNotification(index: number): void {
        this.router.navigate(["/", this.items[index].typeName, this.items[index].entityId]);
    }
}