import { UpsertContractCommand } from './upsert-contract.command';

export namespace UpdateContractCommand {

    export class Request extends UpsertContractCommand.Request {
        public id: number;
    }

    export class Response extends UpsertContractCommand.Response {

    }
}
