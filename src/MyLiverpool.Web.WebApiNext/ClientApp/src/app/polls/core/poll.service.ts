import { Injectable } from '@angular/core';

import { HttpWrapper } from '@base/httpWrapper';
import { Poll, PollFilters } from '@domain/models';
import { POLLS_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';

@Injectable()
export class PollService extends BaseRestService<Poll, PollFilters> {
    private actionUrl: string = POLLS_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, POLLS_ROUTE + '/');
    }
}
