import { BaseEntity } from '@domain/models';


export namespace ChangeUserRoleGroupCommand {


    export class Request extends BaseEntity<Request> {

        public userId: number;

        public roleGroupId: number;

    }


    export class Response extends BaseEntity<Response> {
        public id: number;
    }
}
