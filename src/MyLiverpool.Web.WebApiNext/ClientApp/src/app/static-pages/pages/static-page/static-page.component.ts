import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

import { StaticPagesService } from '@static-pages/static-pages.service';
import { AuthState } from '@auth/store';
import { ObserverComponent } from '@domain/base';

@Component({
    selector: '<static-page>',
    templateUrl: './static-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticPageComponent extends ObserverComponent implements OnInit {
    public content: string;
    @Input() public typeId: number;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;

    constructor(private service: StaticPagesService,
                private route: ActivatedRoute,
                private cd: ChangeDetectorRef) {
        super();
        this.typeId = +route.snapshot.data.type;
    }

    public ngOnInit(): void {
        const sub$ = this.service.getValue(this.typeId)
            .subscribe((pageData: string) => {
                if (pageData) {
                    this.content = pageData;
                    this.cd.markForCheck();
                }
            });
        this.subscriptions.push(sub$);
    }
}
