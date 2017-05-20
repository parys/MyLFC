import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { PmService } from "./pm.service";
import { RolesCheckedService, IRoles } from "../shared/index";
import { Configuration } from "../app.constants";

@Component({
    selector: "pm-counter",
    templateUrl: "./pm-counter.component.html"
})
export class PmCounterComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public roles: IRoles;
    public count: number = 0;

    constructor(private pmService: PmService,
        private rolesChecked: RolesCheckedService,
        private config: Configuration) { }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.updateCount();
        this.scheduleUpdateCount();
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
        if(this.sub2) { this.sub2.unsubscribe(); }
    }

    private scheduleUpdateCount() {
        this.sub2 = Observable.interval(this.config.updateUnreadPmCountTime)
            .map(x => this.updateCount())
            .subscribe();
    }

    private updateCount() {
        this.sub = this.pmService.getUnreadCount()
            .subscribe(data => this.count = data,
                error => console.log(error));
    }
}