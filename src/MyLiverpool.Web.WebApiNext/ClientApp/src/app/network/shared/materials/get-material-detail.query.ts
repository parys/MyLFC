import { BaseEntity } from '@domain/models';


export namespace GetMaterialDetailQuery {


    export class Request extends BaseEntity<Request> {

        public id: number;

    }


    export class Response extends BaseEntity<Response> {
        public id: number;
        public title: string;
        public categoryId: number;
        public categoryName: string;
        public additionTime: Date;
        public commentsCount: number;
        public userId: number;
        public userName: string;
        public brief: string;
        public message: string;
        public reads: number;
        public source: string;
        public shortLink: string;
        public photo: string;
        public photoPreview: string;
        public pending: boolean;
        public onTop: boolean;
        public canCommentary: boolean;
        public type: number;
        public typeName: string;
        public socialLinks: string;
        public nextMaterialId: number;
        public nextMaterialTitle: string;
        public prevMaterialId: number;
        public prevMaterialTitle: string;
        public usePhotoInBody: boolean;
        public tags: string;

    }
}
