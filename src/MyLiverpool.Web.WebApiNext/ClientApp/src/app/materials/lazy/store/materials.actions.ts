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

export class ActivateMaterial {
    static readonly type = '[Materials] Activate material';
    constructor(public readonly payload: number) { }
}

export class DeleteMaterial {
    static readonly type = '[Materials] Delete material';
    constructor(public readonly payload: { id: number, redirect: boolean }) { }
}

export class AddView {
    static readonly type = '[Materials] Add material view';
    constructor(public readonly payload: number) { }
}

export class GetOtherMaterialsList {
    static readonly type = '[Materials] Get other materials list';
}
