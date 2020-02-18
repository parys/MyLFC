import { Injectable } from '@angular/core';

import { State, Selector, Action, StateContext } from '@ngxs/store';

import { tap } from 'rxjs/operators';

import { MaterialsStateModel } from './materials.model';
import { GetMaterialsListQuery, GetMaterialDetailQuery } from '@network/shared/materials';
import { MaterialService } from '@materials/core';
import { SetMaterialsFilterOptions, GetMaterialsList, ChangeSort, ChangePage, GetMaterialById } from './materials.actions';
import { of } from 'rxjs';

@State<MaterialsStateModel>({
    name: 'materials',
    defaults: {
        materials: [],
        material: null,
        request: new GetMaterialsListQuery.Request({ currentPage: 1, pageSize: 15, sortDirection: 'desc', sortOn: 'lastModified' }),

    },
})
@Injectable()
export class MaterialsState {

    @Selector()
    static material(state: MaterialsStateModel) {
        return state.material;
    }

    @Selector()
    static materials(state: MaterialsStateModel) {
        return state.materials;
    }

    @Selector()
    static request(state: MaterialsStateModel) {
        return state.request;
    }

    constructor(protected network: MaterialService) { }

    @Action(ChangeSort)
    @Action(ChangePage)
    @Action(SetMaterialsFilterOptions)
    onChangeSort({ patchState, getState, dispatch }: StateContext<MaterialsStateModel>, { payload }: ChangeSort) {
        const { request } = getState();
        patchState({ request: { ...request, ...payload } });
        dispatch(new GetMaterialsList());
    }

    @Action(GetMaterialsList)
    onGetMaterialsList(ctx: StateContext<MaterialsStateModel>) {
        const { request } = ctx.getState();
        return this.network.getAll2(new GetMaterialsListQuery.Request(request))
            .pipe(
                tap(response => {
                    ctx.patchState({ materials: response.results || [] });
                    ctx.patchState({
                        request: {
                            ...request, rowCount: response.rowCount,
                            currentPage: response.currentPage, pageSize: response.pageSize
                        }
                    });
                }));
    }

    @Action(GetMaterialById)
    onGetMaterialById({ patchState }: StateContext<MaterialsStateModel>, { payload }: GetMaterialById) {
        return (payload.id ? this.network.getSingle2(payload.id) : of(new GetMaterialDetailQuery.Response()))
            .pipe(
                tap(material => {
                    patchState({ material });
                })
            );
    }
}
