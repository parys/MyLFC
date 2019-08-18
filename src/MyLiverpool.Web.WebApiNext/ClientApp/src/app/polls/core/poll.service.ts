import { Injectable } from '@angular/core';
import { HttpWrapper } from '@app/+httpWrapper';
import { Poll, PollFilters } from '@domain/models';
import { POLLS_ROUTE } from '@app/+constants';
import { BaseRestService } from '@app/+infrastructure';

@Injectable()
export class PollService extends BaseRestService<Poll, PollFilters> {
    private actionUrl: string = POLLS_ROUTE + '/';

    constructor(public http: HttpWrapper) {
        super(http, POLLS_ROUTE + '/');
    }
}
