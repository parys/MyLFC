import { Component, OnInit } from '@angular/core';
import { Poll, PollFilters, PagedList } from '@domain/models';
import { PollService } from '@polls/core/poll.service';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'poll-list',
    templateUrl: './poll-list.component.html'
})
export class PollListComponent implements OnInit {
    public items: Poll[];

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    constructor(private service: PollService) {
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
