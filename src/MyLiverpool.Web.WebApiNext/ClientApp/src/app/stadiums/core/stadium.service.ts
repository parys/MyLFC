import { Injectable } from '@angular/core';

import { HttpWrapper } from '@base/httpWrapper';
import { Stadium, StadiumFilters } from '@domain/models';
import { STADIUMS_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';

@Injectable()
export class StadiumService extends BaseRestService<Stadium, StadiumFilters> {
    private actionUrl: string = STADIUMS_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, STADIUMS_ROUTE + '/');
    }
}
