import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { ForumSubsectionService, ForumSubsection } from '@forum/forumSubsection';
import { ForumTheme } from '@forum/forumTheme';

@Component({
    selector: 'forumSubsection-list',
    templateUrl: './forumSubsection-list.component.html'
})
export class ForumSubsectionListComponent implements OnInit, OnDestroy {
    item: ForumSubsection;
    items: ForumTheme[];
    private sub: Subscription;
    private sub2: Subscription;
    page = 1;
    itemsPerPage = 15;
    totalItems: number;

    constructor(private service: ForumSubsectionService,
                private route: ActivatedRoute, private location: Location) {
    }

    public ngOnInit(): void {
        this.sub2 = this.route.queryParams.subscribe(params => {
            if (params['page']) {
                this.page = +params['page'];
            }
        });
        this.sub = this.route.params.subscribe(params => {
            const id = +params['id'];
                   this.update(id);
        });
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update(this.item.id);
        const newUrl = `forum/${this.item.id}?page=${this.page}`;

        this.location.replaceState(newUrl);
    }

    public update(id: number) {
        this.service.getSingleWithThemes(id, this.page)
            .subscribe(data => {
                this.item = data;
                this.itemsPerPage = data.themes.pageSize;
                this.items = data.themes.results;
                this.totalItems = data.themes.rowCount;
            });
    }
}
