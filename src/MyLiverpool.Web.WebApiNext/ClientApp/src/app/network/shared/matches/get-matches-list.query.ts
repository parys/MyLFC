import { PagedResult, PagedQueryBase, BaseEntity } from '@domain/models';


export namespace GetMatchesListQuery {


    export class Request extends BaseEntity<Request> implements PagedQueryBase {

        public currentPage: number;

        public sortOn: string;

        public sortDirection: string;

        public pageSize: number;

        public skipCount: number;

        public rowCount: number;
    }


    export class Response extends PagedResult<MatchListDto> { }


    export class MatchListDto extends BaseEntity<MatchListDto> {

        public id: number;

        public userName: string;

        public email: string;

    }


}
