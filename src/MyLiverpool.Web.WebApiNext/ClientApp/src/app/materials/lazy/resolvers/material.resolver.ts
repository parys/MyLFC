import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { GetMaterialDetailQuery } from '@network/shared/materials';

import { GetMaterialById } from '@materials/lazy/store/materials.actions';


@Injectable()
export class MaterialResolver implements Resolve<any> {

    constructor(private store: Store) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<GetMaterialDetailQuery.Response> {
        const payload = new GetMaterialDetailQuery.Request({ id: route.params.id });
        return this.store.dispatch([
            new GetMaterialById(payload)]);
    }

}
