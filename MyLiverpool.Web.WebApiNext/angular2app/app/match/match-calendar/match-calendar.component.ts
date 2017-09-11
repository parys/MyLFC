import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { MatchService } from "../match.service";
import { Match } from "../match.model";
import { RolesCheckedService, IRoles } from "../../shared/index";

@Component({
    selector: "match-calendar",
    templateUrl: "./match-calendar.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchCalendarComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public last: Match;
    public next: Match;
    public roles: IRoles;

    constructor(private service: MatchService,
        private rolesChecked: RolesCheckedService,
        private cd: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.service.getForCalendar().subscribe(data => {
                if (data) {
                    if (data.length === 1) {
                        if (data[0].scoreHome) {
                            this.last = data[0];
                        } else {
                            this.next = data[0];
                        }
                    } else {
                        [this.last, this.next] = data;
                    }
                }
            },
            error => console.log(error),
        () => {this.cd.markForCheck();});
    }

    public ngOnDestroy(): void {
        if(this.sub) {this.sub.unsubscribe();}
    }
}