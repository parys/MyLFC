import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { CreateContractCommand, UpdateContractCommand, GetContractDetailQuery, GetContractsListQuery, GetCurrentContractsListQuery } from '@network/shared/contracts';

@Injectable()
export class ContractsService {
    private actionUrl: string = 'contracts' + '/';

    constructor(public http: HttpWrapper) {
    }

    public getAll(filters: GetContractsListQuery.Request): Observable<GetContractsListQuery.Response> {
        return this.http.getWithParams<GetContractsListQuery.Response>(this.actionUrl, filters);
    }

    public getCurrent(filters: GetCurrentContractsListQuery.Request): Observable<GetCurrentContractsListQuery.Response> {
        return this.http.getWithParams<GetCurrentContractsListQuery.Response>(this.actionUrl + 'current', filters);
    }

    public getSingle(id: number): Observable<GetContractDetailQuery.Response> {
        return this.http.get<GetContractDetailQuery.Response>(this.actionUrl + id);
    }

    public create( item: CreateContractCommand.Request): Observable<CreateContractCommand.Response> {
        const stringify = JSON.stringify(item);
        return this.http.post<CreateContractCommand.Response>(this.actionUrl, stringify);
    }

    public update(id: number, item: UpdateContractCommand.Request): Observable<UpdateContractCommand.Response> {
        const stringify = JSON.stringify(item);
        return this.http.put<UpdateContractCommand.Response>(this.actionUrl + id, stringify);
    }

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    }

}
