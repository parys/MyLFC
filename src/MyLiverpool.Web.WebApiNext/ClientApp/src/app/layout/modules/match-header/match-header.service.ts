import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { MATCHES_ROUTE } from '@constants/routes.constants';
import { Match } from '@domain/models';

@Injectable()
export class MatchHeaderService {
    constructor(private http: HttpWrapper) {
    }

    public getHeaderMatch(): Observable<Match> {
        return this.http.get<Match>(MATCHES_ROUTE + '/header');
    }
}
