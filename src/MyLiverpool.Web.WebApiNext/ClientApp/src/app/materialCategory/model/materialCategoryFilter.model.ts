import { PagedQueryBase } from '@app/+infrastructure';
import { MaterialType } from './materialType.enum';

export class MaterialCategoryFilter extends PagedQueryBase {
    public materialType: MaterialType;
}
