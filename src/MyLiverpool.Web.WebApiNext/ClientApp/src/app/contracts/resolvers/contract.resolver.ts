import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { GetContractDetailQuery } from '@network/shared/contracts';
import { Actions } from '@contracts/store/contracts.actions';


@Injectable()
export class ContractResolver implements Resolve<any> {

    constructor(private store: Store) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<GetContractDetailQuery.Response> {
        const payload = new GetContractDetailQuery.Request({ id: route.params.id });
        return this.store.dispatch([
            new Actions.GetContractById(payload)]);
    }

}
