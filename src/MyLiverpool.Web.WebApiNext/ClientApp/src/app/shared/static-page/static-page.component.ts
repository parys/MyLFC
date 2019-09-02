import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { LayoutService } from '@layout/layout.service'; // todo?
import { RolesCheckedService } from '@base/auth';

@Component({
    selector: '<static-page>',
    templateUrl: './static-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticPageComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public content: string;
    public typeId: number;

    constructor(private service: LayoutService,
                public roles: RolesCheckedService,
                private route: ActivatedRoute,
                private cd: ChangeDetectorRef) {

        this.typeId = +route.snapshot.data['type'];
    }

    public ngOnInit(): void {
        this.sub = this.service.getValue(this.typeId)
            .subscribe((pageData: string) => {
                if (pageData) {
                    this.content = pageData;
                    this.cd.markForCheck();
                }
            });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
