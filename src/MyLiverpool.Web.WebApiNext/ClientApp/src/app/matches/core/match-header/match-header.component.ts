import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatchService } from '../match.service';
import { Match } from '@domain/models';

@Component({
    selector: 'match-header',
    templateUrl: './match-header.component.html',
    styleUrls: ['./match-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MatchHeaderComponent implements OnInit {
    public item: Match;

    constructor(private matchService: MatchService,
        private cd: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.matchService.getHeaderMatch()
            .subscribe(data => this.item = data,
                null,
                () => {
                    this.cd.markForCheck();
                });
    }
}
