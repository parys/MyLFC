import { BaseEntity } from '@domain/models';


export namespace GetOtherMaterialsListQuery {


    export class Request extends BaseEntity<Request>  {

        public currentPage: number;

        public sortOn: string;

        public sortDirection: string;

        public pageSize: number;

        public skipCount: number;

        public rowCount: number;
    }


    export class Response {

        public results: OtherMaterialListDto[];
     }


    export class OtherMaterialListDto extends BaseEntity<OtherMaterialListDto> {

        public id: number;
        public title: string;
        public typeName: string;
    }

}
