import { BaseEntity } from '@domain/models';


export namespace GetContractDetailQuery {


    export class Request extends BaseEntity<Request>  {
        public id: number;
    }


    export class Response extends BaseEntity<Response> {

        public id: number;

        public salary: number;

        public personId: number;

        public startDate: Date;

        public endDate: Date;
    }

}
