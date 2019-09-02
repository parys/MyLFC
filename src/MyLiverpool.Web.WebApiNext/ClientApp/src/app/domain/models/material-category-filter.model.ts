import { PagedQueryBase } from '@base/infrastructure';
import { MaterialType } from '@domain/models';

export class MaterialCategoryFilter extends PagedQueryBase {
    public materialType: MaterialType;
}
