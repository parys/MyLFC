import { PagedQueryBase } from '@base/infrastructure';

export class MaterialFilters extends PagedQueryBase {
    public categoryId: number;
    public userId: number;
    public materialType: string; // 0 - both, 1 - news, 2 - blog,
}
