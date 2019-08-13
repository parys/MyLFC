import { MaterialType } from './material-type.enum';

export class MaterialCategory {
    public id: number;
    public itemsCount: number;
    public name: string;
    public description: string;
    public materialType: MaterialType;
}
