import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Comment, CommentVote, CommentFilter } from '@domain/models';
import { PagedList } from '@app/shared';
import { HttpWrapper } from '@app/+httpWrapper';
import { COMMENTS_ROUTE, MATERIALS_ROUTE, MATCHES_ROUTE } from '@app/+constants';
import { BaseRestService } from '@app/+infrastructure';

@Injectable()
export class CommentService extends BaseRestService<Comment, CommentFilter> {
    private actionUrl: string = COMMENTS_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, COMMENTS_ROUTE + '/');
    }

    public getLastList(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.actionUrl + 'last');
    }

    public getAllByMaterial(filter: CommentFilter): Observable<PagedList<Comment>> {
        return this.http.getWithParams<PagedList<Comment>>(`${MATERIALS_ROUTE}/${filter.materialId}/comments`, filter);
        // todo move to material service
    }

    public getAllByMatch(filter: CommentFilter): Observable<PagedList<Comment>> {
        return this.http.getWithParams<PagedList<Comment>>(`${MATCHES_ROUTE}/${filter.matchId}/comments`, filter);
        // todo move to match service
    }

    public verify(id: number): Observable<number> {
        return this.http.put<number>(this.actionUrl + id + '/verify', '');
    }

    public vote(vote: CommentVote): Observable<boolean> {
        return this.http.put<boolean>(this.actionUrl + 'vote/', JSON.stringify(vote));
    }
}
