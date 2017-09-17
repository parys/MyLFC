import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { AdminService } from "../admin.service";
import { HelperType } from "../helperType.enum";
import { RolesCheckedService, IRoles } from "../../shared/index";

@Component({
    selector: "cup-table",
    templateUrl: "./cupTable.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CupTableComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public roles: IRoles;
    public cupTable: string;

    constructor(private service: AdminService,
        private cd: ChangeDetectorRef,
        private rolesChecked: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.service
            .getValue(HelperType.CupTable)
            .subscribe(data => this.cupTable = data,
                error => console.log(error),
                () => {
                    this.cd.markForCheck();
                });
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }
}