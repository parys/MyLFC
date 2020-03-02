import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UserFilters, RoleGroup } from '@domain/models';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { GetRoleGroups, GetUsersList, ChangeSort, SetPmReceiverId, ChangePage, SetUsersFilterOptions } from '@users/store';
import { UsersState } from '@users/store/users.state';
import { GetUsersListQuery } from '@network/shared/users';
import { KeyMapper, TableComponent } from '@domain/tables/components';


@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent extends TableComponent<GetUsersListQuery.UserListDto> implements OnInit, AfterViewInit {

    displayedColumns = ['userName', 'lastModified', 'commentsCount', 'registrationDate', 'roleGroupName'];

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;
    @Select(AuthState.userId) userId$: Observable<number>;
    @Select(UsersState.roleGroups) roleGroups$: Observable<RoleGroup[]>;
    @Select(UsersState.users) users$: Observable<GetUsersListQuery.UserListDto[]>;
    @Select(UsersState.request) request$: Observable<GetUsersListQuery.Request>;
    @Select(UsersState.pmReceiver) pmReceiver$: Observable<{ id: number, userName: string}>;

    @ViewChild('scroller') scrollerElem: ElementRef;

    constructor(private store: Store) {
                    super();
    }

    public ngOnInit(): void {
        this.store.dispatch([new GetRoleGroups(), new GetUsersList()]);
        this.subscribeOnChangeUsers();
    }

    public ngAfterViewInit(): void {
        this.scrollerRef = this.scrollerElem;
        super.ngAfterViewInit();
    }

    protected onLoad(): Observable<any> {
        return this.store.dispatch(new GetUsersList());
    }

    protected key: KeyMapper<GetUsersListQuery.UserListDto> = x => x.id;


    public onPageChanged(event: any): void {
        this.store.dispatch(new ChangePage({ currentPage: event.pageIndex, pageSize: event.pageSize}));
    }

    public onWritePm(userId: number, userName: string): void {
        this.store.dispatch(new SetPmReceiverId({id: userId, userName}));
    }

    public onClosePmWindow(event: any): void {
        this.store.dispatch(new SetPmReceiverId(null));
    }

    public onFilterChange(filters: UserFilters): void {
        this.store.dispatch(new SetUsersFilterOptions({ ...filters, currentPage: 1 }));
    }

    protected onSortChange(event: { sortOn: string; sortDirection: string; }): void {
        this.store.dispatch(new ChangeSort({ ...event, currentPage: 1}));
    }

    private subscribeOnChangeUsers(): void {
        const subscription = this.users$.subscribe(users => {
            this.setDataSource(users || []);
        });
        this.subscriptions.push(subscription);
    }

}
