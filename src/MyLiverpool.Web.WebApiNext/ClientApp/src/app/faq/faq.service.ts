import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { FaqCategory } from '@domain/models';

@Injectable()
export class FaqService {
    private actionUrl = 'faq/';

    constructor(public http: HttpWrapper) {
    }

    public get(): Observable<FaqCategory[]> {
        return this.http.get<FaqCategory[]>(this.actionUrl);
    }
}
