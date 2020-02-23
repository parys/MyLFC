import { MatchFilters } from '@domain/models';
import { GetMatchDetailQuery } from '@network/shared/matches';

export class GetMatchesList {
    static readonly type = '[Matches] Get matches list';
}

export class GetMatchTypesList {
    static readonly type = '[Matches] Get match types list';
}

export class ChangeSort {
    static readonly type = '[Matches] Change matches sort';
    constructor(public readonly payload: { sortOn: string; sortDirection: string; currentPage: number; }) { }
}

export class ChangePage {
    static readonly type = '[Matches] Change matches page';
    constructor(public readonly payload: { currentPage: number; pageSize: number; }) { }
}

export class SetMatchesFilterOptions {
    static readonly type = '[Matches] Set matches filter options';
    constructor(public readonly payload: MatchFilters & { currentPage: number }) { }
}

export class GetMatchById {
    static readonly type = '[Matches] Get match by id';
    constructor(public readonly payload: GetMatchDetailQuery.Request) { }
}

