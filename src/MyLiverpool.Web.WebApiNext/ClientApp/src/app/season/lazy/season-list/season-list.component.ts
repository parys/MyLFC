import { Component, OnInit } from '@angular/core';

import { SeasonService } from '../../core';
import { Season } from '@domain/models';
import { PagedList } from '@app/shared';

@Component({
    selector: 'season-list',
    templateUrl: './season-list.component.html'
})
export class SeasonListComponent implements OnInit {
    public seasons: Season[];

    constructor(private service: SeasonService) {
    }

    public ngOnInit(): void {
        this.service.getAllWithoutFilter()
            .subscribe((data: PagedList<Season>) => this.seasons = data.results);
    }

    public setAsCurrent(index: number): void {
        this.service.setAsCurrent(this.seasons[index].id)
            .subscribe(data => data);
    }
}
