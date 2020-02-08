import { BaseEntity } from './base-entity.model';

abstract class PagedBase extends BaseEntity<PagedBase> {

    public currentPage: number;

    public pageSize: number;

    public skipCount: number;
}


abstract class PagedResultBase extends PagedBase {

    public rowCount: number;
}


export abstract class PagedQueryBase extends PagedBase {

    public sortOn: string;

    public sortDirection: 'asc' | 'desc' | string;
}


export class PagedResult<T> extends PagedResultBase {

    public results: T[];

}
