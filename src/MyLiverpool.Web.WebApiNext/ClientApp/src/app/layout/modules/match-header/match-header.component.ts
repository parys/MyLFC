import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Match } from '@domain/models';
import { MatchHeaderService } from './match-header.service';

@Component({
    selector: 'match-header',
    templateUrl: './match-header.component.html',
    styleUrls: ['./match-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MatchHeaderComponent implements OnInit {
    public item: Match;

    constructor(private service: MatchHeaderService,
                private cd: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.service.getHeaderMatch()
            .subscribe(data => this.item = data,
                null,
                () => {
                    this.cd.markForCheck();
                });
    }
}
