import { BaseEntity } from '@domain/models';

export namespace UpsertContractCommand {

    export class Request extends BaseEntity<Request> {

        public salary: number;

        public personId: number;

        public startDate: Date;

        public endDate: Date;
    }

    export class Response extends BaseEntity<Response> {
        public id: number;
    }
}
