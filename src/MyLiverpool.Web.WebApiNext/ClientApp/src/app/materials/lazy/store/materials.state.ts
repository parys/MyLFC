import { Injectable } from '@angular/core';

import { State, Selector, Action, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { updateManyItems } from '@domain/operators/update-many-items';
import { removeMany } from '@domain/operators/remove-from-many';
import { ShowNotice } from '@notices/store';
import { NoticeMessage } from '@notices/shared';
import { StorageService } from '@base/storage';
import { CustomTitleMetaService } from '@core/services';

import { GetMaterialsListQuery, GetMaterialDetailQuery } from '@network/shared/materials';
import { MaterialService } from '@materials/core';
import { MaterialsStateModel } from './materials.model';
import {
    SetMaterialsFilterOptions,
    GetMaterialsList,
    ChangeSort,
    ChangePage,
    GetMaterialById,
    ActivateMaterial,
    DeleteMaterial,
    AddView
} from './materials.actions';

declare function ssn(): any;

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

    constructor(protected network: MaterialService,
                private storage: StorageService,
                protected titleService: CustomTitleMetaService) { }

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

                    this.titleService.setTitle(material.title);
                    this.titleService.updateDescriptionMetaTag(material.brief);
                    this.titleService.updateKeywordsMetaTag(material.tags);
                    this.titleService.updateOgImageMetaTag(`https://mylfc.ru${material.photoPreview}`);
                    if (material.socialLinks) {
                        ssn();
                    }
                })
            );
    }

    @Action(ActivateMaterial)
    onActivateMaterial({setState, getState, patchState, dispatch }: StateContext<MaterialsStateModel>, { payload }: ActivateMaterial) {
        return this.network.activate(payload).pipe(
            tap(result => {
                const { material } = getState();
                if (result && material && payload === material.id) {
                    material.pending = false;
                    patchState({ material });

                }
                setState(
                    patch({
                        materials: updateManyItems<GetMaterialsListQuery.MaterialListDto>
                            (item => item.id === payload, patch<GetMaterialsListQuery.MaterialListDto>({ pending: false }))
                    })
                );
                dispatch(new ShowNotice(NoticeMessage.success('Материал активирован', '')));
            })
        );
    }

    @Action(DeleteMaterial)
    onDeleteMaterial({setState, getState, patchState, dispatch }: StateContext<MaterialsStateModel>, { payload }: DeleteMaterial) {
        return this.network.delete(payload.id).pipe(
            tap(result => {
                const { material } = getState();
                if (result && material && payload.id === material.id) {
                    patchState({ material: null });
                }
                setState(
                        patch({
                            materials: removeMany<GetMaterialsListQuery.MaterialListDto>
                                (item => item.id === payload.id)
                        })
                );
                dispatch(new ShowNotice(NoticeMessage.success('Материал удален', '')));
            })
        );
    }

    @Action(AddView)
    onAddView({ getState, patchState }: StateContext<MaterialsStateModel>, { payload }: AddView) {

        if (!this.storage.tryAddViewForMaterial(payload)) { return; }

        const { material } = getState();
        return this.network.addView(payload).pipe(
            tap(result => {
                material.reads++;
                if (result && material && payload === material.id) {
                    patchState({ material });
                }
            })
        );
    }
}
