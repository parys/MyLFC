import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";
import { AdminService } from "../admin.service";
import { HelperType } from "../helperType.enum";
import { RolesCheckedService } from "@app/shared";

@Component({
    selector: "cup-table",
    templateUrl: "./cupTable.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CupTableComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public cupTable: SafeHtml;

    constructor(private service: AdminService,
        private cd: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.sub = this.service
            .getValue(HelperType.CupTable)
            .subscribe(data => this.cupTable = this.sanitizeByHtml(data),
                error => console.log(error),
                () => {
                    this.cd.markForCheck();
                });
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }
}