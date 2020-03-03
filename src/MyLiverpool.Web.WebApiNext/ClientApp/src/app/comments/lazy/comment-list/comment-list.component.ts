import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';

import { merge, of, Observable } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { Comment, CommentFilter, PagedList } from '@domain/models';
import { COMMENTS_ROUTE, PAGE, USER_ID } from '@constants/index';

import { CommentService } from '@comments/comment.service';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';
import { ConfirmationMessage } from '@notices/shared';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent extends ObserverComponent implements AfterViewInit {
    public items: Comment[];
    public categoryId: number;
    public userName: string;
    public userId: number;

    @Select(AuthState.isModerator) isModerator$: Observable<boolean>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('onlyUnverified') onlyUnverified: MatCheckbox;

    constructor(private materialCommentService: CommentService,
                private route: ActivatedRoute,
                private location: Location,
                private notifier: NotifierService) {
                    super();
    }

    public ngAfterViewInit(): void {
        const sub$ = this.route.queryParams.subscribe(qParams => {
                this.paginator.pageIndex = +qParams[PAGE] - 1 || 0;
                this.paginator.pageSize = +qParams['itemsPerPage'] || 15;

                    this.categoryId = qParams['categoryId'] || null;
                this.userName = qParams['userName'] || '';
                this.userId = qParams[USER_ID];
                this.onlyUnverified.checked = qParams['onlyUnverified'] || false;
            });
            
        this.subscriptions.push(sub$);

        merge(this.paginator.page,
                this.onlyUnverified.change
            )
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<Comment>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
        ).subscribe((data: Comment[]) => {
                    this.items = data;
                    this.updateUrl();
                });
    }

    public update(): Observable<PagedList<Comment>> {
        const filters = new CommentFilter();
        filters.onlyUnverified = this.onlyUnverified.checked || false;
        filters.userId = this.userId;
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize;
        return this.materialCommentService
            .getAll(filters);
    }

    private updateUrl(): void {
        let newUrl = `${COMMENTS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}&itemsPerPage=${this.paginator.pageSize}`;
        if (this.userId) {
            newUrl = `${newUrl}&${USER_ID}=${this.userId}`;
        }
        if (this.onlyUnverified !== undefined) {
            newUrl = `${newUrl}&onlyUnverified=${this.onlyUnverified.checked}`;
        }
        this.location.replaceState(newUrl);
    }

    public verify(index: number): void {
        this.materialCommentService
            .verify(this.items[index].id)
            .subscribe((data: number) => this.items[index].isVerified = true);
    }

    private showDeleteModal(index: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить комментарий?'
        })).subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
        this.subscriptions.push(sub$);
    }

    private delete(index: number): void {
        this.materialCommentService.delete(this.items[index].id)
            .subscribe((res: boolean) => {
                if (res) {
                    this.items.splice(index, 1);
                    this.paginator.length -= 1;
                }});
    }
}
