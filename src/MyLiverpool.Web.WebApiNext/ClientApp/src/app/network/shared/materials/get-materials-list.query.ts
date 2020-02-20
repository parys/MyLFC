import { PagedResult, PagedQueryBase, BaseEntity } from '@domain/models';


export namespace GetMaterialsListQuery {


    export class Request extends BaseEntity<Request> implements PagedQueryBase {

        public currentPage: number;

        public sortOn: string;

        public sortDirection: string;

        public pageSize: number;

        public skipCount: number;

        public rowCount: number;
    }


    export class Response extends PagedResult<MaterialListDto> { }


    export class MaterialListDto extends BaseEntity<MaterialListDto> {

        public id: number;
        public title: string;
        public categoryId: number;
        public categoryName: string;
        public additionTime: Date;
        public commentsCount: number;
        public userId: number;
        public userName: string;
        public brief: string;
        public reads: number;
        public photo: string;
        public photoPreview: string;
        public pending: boolean;
        public onTop: boolean;
        public canCommentary: boolean;
        public type: number;
        public typeName: string;
        public tags: string;

    }


}
