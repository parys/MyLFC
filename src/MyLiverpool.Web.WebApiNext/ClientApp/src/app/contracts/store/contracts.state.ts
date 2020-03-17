import { Injectable } from '@angular/core';

import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { updateManyItems } from '@domain/operators/update-many-items';
import { removeMany } from '@domain/operators/remove-from-many';
import { ShowNotice } from '@notices/store';
import { NoticeMessage } from '@notices/shared';

import { ContractsStateModel } from './contracts-state.model';
import { Actions } from './contracts.actions';
import { GetContractsListQuery, GetContractDetailQuery, GetCurrentContractsListQuery } from '@network/shared/contracts';
import { ContractsService } from '@contracts/contracts.service';


@State<ContractsStateModel>({
    name: 'contracts',
    defaults: {
        contracts: [],
        currentContracts: [],
        contract: null,
        request: new GetContractsListQuery.Request({ currentPage: 1, pageSize: 15, skipCount: 0, sortDirection: 'desc', sortOn: 'id' }),
        currentRequest: new GetCurrentContractsListQuery.Request({ currentPage: 1, pageSize: 15, skipCount: 0, sortDirection: 'desc', sortOn: 'id' }),
    },
})
@Injectable()
export class ContractsState {

    @Selector()
    static contract(state: ContractsStateModel) {
        return state.contract;
    }

    @Selector()
    static contracts(state: ContractsStateModel) {
        return state.contracts;
    }

    @Selector()
    static currentContracts(state: ContractsStateModel) {
        return state.currentContracts;
    }

    @Selector()
    static request(state: ContractsStateModel) {
        return state.request;
    }

    @Selector()
    static currentRequest(state: ContractsStateModel) {
        return state.currentRequest;
    }

    constructor(protected network: ContractsService) { }

    @Action(Actions.ChangeSort)
    @Action(Actions.ChangePage)
    onChangeSort({ patchState, getState, dispatch }: StateContext<ContractsStateModel>, { payload }: Actions.ChangeSort) {
        const { request } = getState();
        patchState({ request: { ...request, ...payload } });
        dispatch(new Actions.GetContractsList());
    }

    @Action(Actions.GetContractsList)
    onGetContractsList(ctx: StateContext<ContractsStateModel>) {
        const { request } = ctx.getState();
        return this.network.getAll(new GetContractsListQuery.Request(request))
            .pipe(
                tap(response => {
                    ctx.patchState({ contracts: response.results || [] });
                    ctx.patchState({
                        request: {
                            ...request,
                            currentPage: response.currentPage,
                            pageSize: response.pageSize
                        }
                    });
                }));
    }

    @Action(Actions.ChangeCurrentSort)
    onChangeCurrentSort({ patchState, getState, dispatch }: StateContext<ContractsStateModel>, { payload }: Actions.ChangeCurrentSort) {
        const { currentRequest } = getState();
        patchState({ currentRequest: { ...currentRequest, ...payload } });
        dispatch(new Actions.GetCurrentContractsList());
    }

    @Action(Actions.GetCurrentContractsList)
    onGetCurrentContractsList(ctx: StateContext<ContractsStateModel>) {
        const { currentRequest } = ctx.getState();
        return this.network.getCurrent(new GetCurrentContractsListQuery.Request(currentRequest))
            .pipe(
                tap(response => {
                    ctx.patchState({ currentContracts: response.results || [] });
                    ctx.patchState({
                        currentRequest: {
                            ...currentRequest
                        }
                    });
                }));
    }

    @Action(Actions.GetContractById)
    onGetContractById({ patchState }: StateContext<ContractsStateModel>, { payload }: Actions.GetContractById) {
        return (payload.id > 0 ? this.network.getSingle(payload.id) : of(new GetContractDetailQuery.Response()))
            .pipe(
                tap(contract => {
                    patchState({ contract });
                })
            );
    }

    @Action(Actions.CreateContract)
    onCreateContract({dispatch}: StateContext<ContractsStateModel>, { payload }: Actions.CreateContract) {
        return this.network.create(payload).pipe(
            tap(response => {
                dispatch(new ShowNotice(NoticeMessage.success('Контракт создан', '')))
            })
        )
    }

    @Action(Actions.UpdateContract)
    onUpdateContract({dispatch}: StateContext<ContractsStateModel>, { payload }: Actions.UpdateContract) {
        return this.network.update(payload.id, payload).pipe(
            tap(response => {
                dispatch(new ShowNotice(NoticeMessage.success('Контракт Обновлен', '')))
            })
        )
    }

    @Action(Actions.DeleteContract)
    onDeleteContract({ setState, getState, patchState, dispatch }: StateContext<ContractsStateModel>, { payload }: Actions.DeleteContract) {
        return this.network.delete(payload).pipe(
            tap(result => {
                const { contract } = getState();
                if (result && contract && payload === contract.id) {
                    patchState({ contract: null });
                }
                setState(
                    patch({
                        contracts: removeMany<GetContractsListQuery.ContractListDto>
                            (item => item.id === payload)
                    })
                );
                dispatch(new ShowNotice(NoticeMessage.success('Контракт удален', '')));
            })
        );
    }

}
