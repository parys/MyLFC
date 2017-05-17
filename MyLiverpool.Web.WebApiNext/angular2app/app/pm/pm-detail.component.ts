import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "pm-detail",
    templateUrl: "./pm-detail.component.html"
})

export class PmDetailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public item: Pm;
    public roles: IRoles;
    public selectedUserId: number;
    public selectedUserName: string;

    constructor(private pmService: PmService,
        private rolesChecked: RolesCheckedService,
        private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.pmService.getSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error));
        });
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    public writePm(): void {
        if (this.roles.isSelf(this.item.senderId)) {
            this.selectedUserId = this.item.receiverId;
            this.selectedUserName = this.item.receiver;
        } else {
            this.selectedUserId = this.item.senderId;
            this.selectedUserName = this.item.sender;
        }
    }

    public closePmWindow(event: any): void {
        this.selectedUserId = null;
    }

    private parse(item: Pm): void {
        this.item = item;
    }
}