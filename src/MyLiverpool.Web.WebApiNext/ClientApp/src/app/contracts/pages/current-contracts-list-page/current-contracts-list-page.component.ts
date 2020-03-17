import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { AuthState } from '@auth/store';

import { GetCurrentContractsListQuery } from '@network/shared/contracts';
import { KeyMapper, TableComponent } from '@domain/tables/components';

import { ContractsState, Actions } from '@contracts/store';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';


@Component({
    selector: 'current-contracts-list-page',
    templateUrl: './current-contracts-list-page.component.html',
    styleUrls: ['./current-contracts-list-page.component.scss']
})

export class CurrentContractsListPageComponent extends TableComponent<GetCurrentContractsListQuery.CurrentContractListDto>
 implements OnInit, AfterViewInit {

    displayedColumns = ['personName', 'age', 'salary', 'startDate', 'endDate'];

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;
    @Select(ContractsState.currentContracts) currentContracts$: Observable<GetCurrentContractsListQuery.CurrentContractListDto[]>;
    @Select(ContractsState.currentRequest) request$: Observable<GetCurrentContractsListQuery.Request>;

    @ViewChild('scroller') scrollerElem: ElementRef;

    constructor(private store: Store,
                private notifier: NotifierService) {
                    super();
                    this.store.dispatch(new Actions.GetCurrentContractsList());
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
        return this.store.dispatch(new Actions.GetCurrentContractsList());
    }

    protected key: KeyMapper<GetCurrentContractsListQuery.CurrentContractListDto> = x => x.id;

    protected onSortChange(event: { sortOn: string; sortDirection: string; }): void {
        this.store.dispatch(new Actions.ChangeCurrentSort({ ...event }));
    }

    private subscribeOnChangeContracts(): void {
        const subscription = this.currentContracts$.subscribe(contracts => {
            this.setDataSource(contracts || []);
        });
        this.subscriptions.push(subscription);
    }

}
