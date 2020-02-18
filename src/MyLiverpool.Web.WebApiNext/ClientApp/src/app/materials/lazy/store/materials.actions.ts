import { MaterialFilters } from '@domain/models/material-filters.model';
import { GetMaterialDetailQuery } from '@network/shared/materials';

export class GetMaterialsList {
    static readonly type = '[Materials] Get materials list';
}

export class ChangeSort {
    static readonly type = '[Materials] Change materials sort';
    constructor(public readonly payload: { sortOn: string; sortDirection: string; currentPage: number; }) { }
}

export class ChangePage {
    static readonly type = '[Materials] Change materials page';
    constructor(public readonly payload: { currentPage: number; pageSize: number; }) { }
}

export class SetMaterialsFilterOptions {
    static readonly type = '[Materials] Set materials filter options';
    constructor(public readonly payload: MaterialFilters & { currentPage: number }) { }
}

export class GetMaterialById {
    static readonly type = '[Materials] Get material by id';
    constructor(public readonly payload: GetMaterialDetailQuery.Request) { }
}
