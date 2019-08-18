import { Injectable } from '@angular/core';
import { MaterialCategory, MaterialCategoryFilter } from '@domain/models';
import { HttpWrapper } from '@app/+httpWrapper';
import { MATERIAL_CATEGORIES_ROUTE } from '@app/+constants';
import { BaseRestService } from '@app/+infrastructure';

@Injectable()
export class MaterialCategoryService extends BaseRestService<MaterialCategory, MaterialCategoryFilter> {

    constructor(public http: HttpWrapper) {
        super(http, MATERIAL_CATEGORIES_ROUTE + '/');
    }
}
