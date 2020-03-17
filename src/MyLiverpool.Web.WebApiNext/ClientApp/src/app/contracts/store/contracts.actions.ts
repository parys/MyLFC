import { GetContractDetailQuery, CreateContractCommand, UpdateContractCommand } from '@network/shared/contracts';

export namespace Actions {
    export class GetContractsList {
        static readonly type = '[Contracts] Get contracts list';
    }

    export class ChangeSort {
        static readonly type = '[Contracts] Change contracts sort';
        constructor(public readonly payload: { sortOn: string; sortDirection: string; currentPage: number; }) { }
    }

    export class GetCurrentContractsList {
        static readonly type = '[Contracts] Get current contracts list';
    }

    export class ChangeCurrentSort {
        static readonly type = '[Contracts] Change current contracts sort';
        constructor(public readonly payload: { sortOn: string; sortDirection: string; }) { }
    }

    export class ChangePage {
        static readonly type = '[Contracts] Change contracts page';
        constructor(public readonly payload: { currentPage: number; pageSize: number; }) { }
    }

    export class GetContractById {
        static readonly type = '[Contracts] Get contract by id';
        constructor(public readonly payload: GetContractDetailQuery.Request) { }
    }

    export class CreateContract {
        static readonly type = '[Contracts] Create contract by id';
        constructor(public readonly payload: CreateContractCommand.Request) { }
    }

    export class UpdateContract {
        static readonly type = '[Contracts] Update contract by id';
        constructor(public readonly payload: UpdateContractCommand.Request) { }
    }

    export class DeleteContract {
        static readonly type = '[Contracts] Delete contract';
        constructor(public readonly payload: number) { }
    }
}
