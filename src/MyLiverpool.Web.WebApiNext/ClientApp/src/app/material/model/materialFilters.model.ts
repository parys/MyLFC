import { MaterialType } from '../../materialCategory/model/materialType.enum';

export class MaterialFilters {
    public currentPage: number = 1;
    public categoryId: number;
    public userId: number;
    public materialType: string; // 0 - both, 1 - news, 2 - blog, 
}