import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { AdminService } from "../../admin/admin.service";
import { RolesCheckedService } from "../../shared/index";

@Component({
    selector: "<static-page>",
    templateUrl: "./static-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticPageComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public content: SafeHtml;
    public typeId: number;

    constructor(private service: AdminService,
        public roles: RolesCheckedService,
        private route: ActivatedRoute,
        private cd: ChangeDetectorRef,
        private sanitizer: DomSanitizer) {

        this.typeId = +route.snapshot.data["type"];
    }

    public ngOnInit(): void {
        this.sub = this.service.getValue(this.typeId).subscribe(pageData => {
                if (pageData) {
                    this.content = this.sanitizeByHtml(pageData);
                    this.cd.markForCheck();
                }
            },
            e => console.log(e));
    }

    public ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }

    public sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }
}