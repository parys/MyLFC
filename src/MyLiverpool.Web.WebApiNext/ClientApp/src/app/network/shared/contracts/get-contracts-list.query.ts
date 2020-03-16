import { BaseEntity, PagedQueryBase, PagedResult } from '@domain/models';


export namespace GetContractsListQuery {


    export class Request extends BaseEntity<Request> implements PagedQueryBase  {
        public sortOn: string;

        public sortDirection: string;

        public pageSize: number;

        public currentPage: number;

        public skipCount: number;
    }


    export class Response extends PagedResult<ContractListDto> {
    }


    export class ContractListDto extends BaseEntity<ContractListDto> {

        public id: number;

        public salary: number;

        public personId: number;

        public personName: string;

        public startDate: Date;

        public endDate: Date;

    }


}
