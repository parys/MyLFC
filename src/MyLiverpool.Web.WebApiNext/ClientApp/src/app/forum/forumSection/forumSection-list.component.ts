import { Component, OnInit } from '@angular/core';
import { ForumSectionService } from './forumSection.service';
import { ForumSection } from './forumSection.model';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'forumSection-list',
    templateUrl: './forumSection-list.component.html'
})

export class ForumSectionListComponent implements OnInit {

    items: ForumSection[];

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;

    constructor(private service: ForumSectionService) {
    }

    public ngOnInit(): void {
        this.service
            .getAll()
            .subscribe(data => this.items = data);
    }
}
