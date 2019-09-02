import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll, PollFilters, PagedList } from '@domain/models';
import { RolesCheckedService } from '@base/auth';
import { PollService } from '@polls/core/poll.service';

@Component({
    selector: 'poll-list',
    templateUrl: './poll-list.component.html'
})
export class PollListComponent implements OnInit {
    public items: Poll[];

    constructor(private service: PollService,
                public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.service
           .getAll(new PollFilters())
            .subscribe((data: PagedList<Poll>) => this.items = data.results);
    }

    public delete(index: number): void {
        this.service.delete(this.items[index].id)
            .subscribe((data: boolean) => {
                if (data) {
                    this.items.splice(index, 1);
                }
            });
    }
}
