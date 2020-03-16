import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { AuthState } from '@auth/store';

import { GetContractsListQuery } from '@network/shared/contracts';
import { KeyMapper, TableComponent } from '@domain/tables/components';

import { ContractsState, Actions } from '@contracts/store';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';


@Component({
    selector: 'contracts-list-page',
    templateUrl: './contracts-list-page.component.html',
    styleUrls: ['./contracts-list-page.component.scss']
})

export class ContractsListPageComponent extends TableComponent<GetContractsListQuery.ContractListDto> implements OnInit, AfterViewInit {

    displayedColumns = ['personName', 'salary', 'startDate', 'endDate'];

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;
    @Select(ContractsState.contracts) contracts$: Observable<GetContractsListQuery.ContractListDto[]>;
    @Select(ContractsState.request) request$: Observable<GetContractsListQuery.Request>;

    @ViewChild('scroller') scrollerElem: ElementRef;

    constructor(private store: Store,
                private notifier: NotifierService) {
                    super();
                    this.store.dispatch(new Actions.GetContractsList());
    }

    public ngOnInit(): void {
        this.subscribeOnChangeContracts();
    }

    public ngAfterViewInit(): void {
        this.scrollerRef = this.scrollerElem;
        super.ngAfterViewInit();
    }

    public onDelete(id: number): void {
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
            .subscribe(result => {
                if (result) {
                    this.store.dispatch(new Actions.DeleteContract(id));
                }
            });
        this.subscriptions.push(sub$);
    }

    protected onLoad(): Observable<any> {
        return this.store.dispatch(new Actions.GetContractsList());
    }

    protected key: KeyMapper<GetContractsListQuery.ContractListDto> = x => x.id;


    public onPageChanged(event: any): void {
        this.store.dispatch(new Actions.ChangePage({ currentPage: event.pageIndex, pageSize: event.pageSize}));
    }

    // public onFilterChange(filters: UserFilters): void {
    //     this.store.dispatch(new SetUsersFilterOptions({ ...filters, currentPage: 1 }));
    // }

    protected onSortChange(event: { sortOn: string; sortDirection: string; }): void {
        this.store.dispatch(new Actions.ChangeSort({ ...event, currentPage: 1}));
    }

    private subscribeOnChangeContracts(): void {
        const subscription = this.contracts$.subscribe(contracts => {
            this.setDataSource(contracts || []);
        });
        this.subscriptions.push(subscription);
    }

}
