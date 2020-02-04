import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

import { merge, of, Observable, fromEvent } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { UserService } from '@users/user.service';
import { User, UserFilters, RoleGroup, PagedList } from '@domain/models';
import { RoleGroupService } from '@role-groups/core';
import { KEYUP, PAGE } from '@constants/help.constants';
import { DEBOUNCE_TIME } from '@constants/app.constants';
import { USERS_ROUTE } from '@constants/routes.constants';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';


@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
    public items: User[];
    public roleGroups: RoleGroup[];
    public selectedUserIndex: number;
    displayedColumns = ['userName', 'lastModified', 'commentsCount', 'registrationDate', 'roleGroupName'];

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @ViewChild(MatSort, { static: true })sort: MatSort;
    @ViewChild(MatPaginator, { static: true })paginator: MatPaginator;
    @ViewChild('roleSelect', { static: true })roleSelect: MatSelect;
    @ViewChild('userInput', { static: true })userInput: ElementRef;
    @ViewChild('ipInput', { static: true })ipInput: ElementRef;

    constructor(private userService: UserService,
                private location: Location,
                private roleGroupService: RoleGroupService,
                private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.paginator.pageIndex = +this.route.snapshot.queryParams[PAGE] - 1 || 0;
        this.paginator.pageSize = +this.route.snapshot.queryParams['itemsPerPage'] || 15;
        this.userInput.nativeElement.value = this.route.snapshot.queryParams['userName'] || '';
        this.ipInput.nativeElement.value = this.route.snapshot.queryParams['ip'] || '';
        this.roleSelect.value = this.route.snapshot.queryParams['roleGroupId'] || '';
        this.updateRoleGroups();

        merge(this.sort.sortChange,
            this.roleSelect.selectionChange,
            fromEvent(this.userInput.nativeElement, KEYUP),
            fromEvent(this.ipInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange,
            this.paginator.page,
            this.roleSelect.selectionChange,
            fromEvent(this.userInput.nativeElement, KEYUP),
            fromEvent(this.ipInput.nativeElement, KEYUP)
                .pipe(debounceTime(DEBOUNCE_TIME),
                    distinctUntilChanged()))
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.update();
                }),
                map((data: PagedList<User>) => {
                    this.paginator.pageIndex = data.currentPage - 1;
                    this.paginator.pageSize = data.pageSize;
                    this.paginator.length = data.rowCount;

                    return data.results;
                }),
                catchError(() => {
                    return of([]);
                })
        ).subscribe((data: User[]) => {
                this.items = data;
                this.updateUrl();
            });
    }

    public writePm(index: number): void {
        this.selectedUserIndex = index;
    }

    public closePmWindow(event: any): void {
        this.selectedUserIndex = null;
    }

    public update(): Observable<PagedList<User>> {
        const filters = new UserFilters();
        filters.currentPage = this.paginator.pageIndex + 1;
        filters.pageSize = this.paginator.pageSize;
        filters.roleGroupId = this.roleSelect.value;
        filters.userName = this.userInput.nativeElement.value;
        filters.ip = this.ipInput.nativeElement.value;
        filters.sortOn = this.sort.active;
        filters.sortDirection = this.sort.direction;

        return this.userService
            .getAll(filters);
    }

    private updateUrl(): void {
        let newUrl = `${USERS_ROUTE}?${PAGE}=${this.paginator.pageIndex + 1}`;

        const userName = this.userInput.nativeElement.value;
        if (userName) {
            newUrl = `${newUrl}&userName=${userName}`;
        }
        const roleGroupId = this.roleSelect.value;
        if (roleGroupId) {
            newUrl = `${newUrl}&roleGroupId=${roleGroupId}`;
        }

        this.location.replaceState(newUrl);
    }

    private updateRoleGroups() {
        this.roleGroupService
            .getAll()
            .subscribe((data: RoleGroup[]) => this.roleGroups = data);
    }
}
