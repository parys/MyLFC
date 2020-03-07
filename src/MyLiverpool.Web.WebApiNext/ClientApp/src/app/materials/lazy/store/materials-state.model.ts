import { GetMaterialsListQuery, GetMaterialDetailQuery, GetOtherMaterialsListQuery } from '@network/shared/materials';

export interface MaterialsStateModel {
    materials: GetMaterialsListQuery.MaterialListDto[];
    material: GetMaterialDetailQuery.Response;
    request: GetMaterialsListQuery.Request;
    others: GetOtherMaterialsListQuery.OtherMaterialListDto[];
}
