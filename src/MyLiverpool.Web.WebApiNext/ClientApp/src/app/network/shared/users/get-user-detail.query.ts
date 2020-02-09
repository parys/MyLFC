import { BaseEntity } from '@domain/models';


export namespace GetUserDetailQuery {


    export class Request extends BaseEntity<Request> {

        public id: number;

    }


    export class Response extends BaseEntity<Response> {
        public id: number;
        public email: string;
        public userName: string;
        public emailConfirmed: boolean;
        public gender: boolean;
        public registrationDate: Date;
        public lastModifiedOn: Date;
        public birthday: Date;
        public roleGroupName: string;
        public fullName: string;
        public roleGroupId: number;
        public lockoutEnd: Date;
        public photo: string;
        public newsCount: number;
        public blogsCount: number;
        public commentsCount: number;
        public ip: string;

    }
}
