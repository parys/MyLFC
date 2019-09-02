import { Injectable } from '@angular/core';
import { MaterialCategory, MaterialCategoryFilter } from '@domain/models';
import { HttpWrapper } from '@base/httpWrapper';
import { MATERIAL_CATEGORIES_ROUTE } from '@constants/routes.constants';
import { BaseRestService } from '@base/infrastructure';

@Injectable()
export class MaterialCategoryService extends BaseRestService<MaterialCategory, MaterialCategoryFilter> {

    constructor(public http: HttpWrapper) {
        super(http, MATERIAL_CATEGORIES_ROUTE + '/');
    }
}
