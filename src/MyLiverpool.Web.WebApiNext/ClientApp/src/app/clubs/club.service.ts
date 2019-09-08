import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { Club, ClubFilters } from '@domain/models';
import { CLUBS_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';

@Injectable()
export class ClubService extends BaseRestService<Club, ClubFilters> {
    private actionUrl: string = CLUBS_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, CLUBS_ROUTE + '/');
    }

    public uploadLogo(file: File, fileName: string): Observable<object> {
        const formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        return this.http.post<object>(`${this.actionUrl}logo/${fileName}`, formData, true);
    }
}
