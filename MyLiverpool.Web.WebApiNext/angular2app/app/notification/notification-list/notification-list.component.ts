import { Component, OnInit } from "@angular/core";
import { Notification } from "../notification.model";
import { NotificationService } from "../notification.service";

@Component({
    selector: "notification-list",
    templateUrl: "./notification-list.component.html"
})

export class NotificationListComponent implements OnInit {
    public items: Notification[];

    constructor(private service: NotificationService) {
    }

    public ngOnInit(): void {
        this.service
            .getAll()
            .subscribe(data => this.items = data,
            e => console.log(e));
    }

    private parse(model: any): void {
        this.items = model.received;
    }

    public delete(index: number): void {
        //this.newsCategoryService.Delete(this.items[index].id).subscribe(data => data,
        //    error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
    }
}