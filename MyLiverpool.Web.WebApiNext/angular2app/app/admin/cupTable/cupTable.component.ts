import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { AdminService } from "../admin.service";
import { HelperType } from "../helperType.enum";
import { RolesCheckedService } from "../../shared/index";

@Component({
    selector: "cup-table",
    templateUrl: "./cupTable.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CupTableComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public cupTable: string;

    constructor(private service: AdminService,
        private cd: ChangeDetectorRef,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
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