import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";
import { AdminService } from "../admin/admin.service";
import { HelperType } from "../admin/helperType.enum";
import { RolesCheckedService, IRoles, } from "../shared/index";

@Component({
    selector: "<about>",
    templateUrl: "./about.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public content: SafeHtml;
    public roles: IRoles;

    constructor(private service: AdminService,
        private rolesChecked: RolesCheckedService,
        private cd: ChangeDetectorRef,
        private sanitizer: DomSanitizer) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.service.getValue(HelperType.About).subscribe(pageData => {
                if (pageData) {
                    this.content = this.sanitizeByHtml(pageData);
                    this.cd.markForCheck();
                }
            },
            e => console.log(e));
    }

    public ngOnDestroy(): void {
        if(this.sub) this.sub.unsubscribe();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }
}