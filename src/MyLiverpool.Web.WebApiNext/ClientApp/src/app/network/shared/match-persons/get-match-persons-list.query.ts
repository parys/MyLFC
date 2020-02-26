import { BaseEntity } from '@domain/models';


export namespace GetMatchPersonsListQuery {


    export class Request extends BaseEntity<Request>  {

        public matchId: number;
    }


    export class Response extends BaseEntity<Response> {
        public results: Record<number, GetMatchPersonsListQuery.MatchPersonListDto[]>;
    }


    export class MatchPersonListDto extends BaseEntity<MatchPersonListDto> {

        public personId: number;

        public number?: number;

        public personType: number;

        public personName: string;
    }


}
