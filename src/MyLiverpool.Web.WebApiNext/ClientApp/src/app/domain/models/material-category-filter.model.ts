import { PagedQueryBase } from '@app/+infrastructure';
import { MaterialType } from './material-type.enum';

export class MaterialCategoryFilter extends PagedQueryBase {
    public materialType: MaterialType;
}
