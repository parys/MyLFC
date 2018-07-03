import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { AdminService } from "../admin.service";
import { HelperType } from "../helperType.enum";
import { RolesCheckedService } from "@app/+auth";

const CUP_TABLE_KEY = makeStateKey<string>("cup-table");

@Component({
    selector: "cup-table",
    templateUrl: "./cupTable.component.html",
    styleUrls: ["./cupTable.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CupTableComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public cupTable: SafeHtml;

    constructor(private service: AdminService,
        private cd: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        private transferState: TransferState,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        const savedData = this.transferState.get(CUP_TABLE_KEY, null);
        if (savedData) {
            this.parse(savedData);
        } else {
            this.sub = this.service
                .getValue(HelperType.CupTable)
                .subscribe(data => {
                        this.parse(data);
                    this.transferState.set(CUP_TABLE_KEY, data);
                },
                    error => console.log(error));
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    private parse(data: string): void {
        this.cupTable = this.sanitizeByHtml(data);
        this.cd.markForCheck();
    }
}