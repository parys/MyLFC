import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@base/auth';
import { User, RoleGroup} from '@domain/models';
import { CustomTitleMetaService as CustomTitleService } from '@shared/index';

import { UserService } from '@users/user.service';
import { ObserverComponent } from '@domain/base';
import { Store, Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { Observable } from 'rxjs';
import { UsersState } from '@users/store';
import { GetUserDetailQuery } from '@network/shared';
import { MatDialog } from '@angular/material/dialog';
import { ChangeRoleGroupDialogData, ChangeRoleGroupDialogComponent } from '@users/components/change-role-group-dialog/change-role-group-dialog.component';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserDetailComponent extends ObserverComponent implements OnInit {
    public item: User;
    public roleGroups: RoleGroup[];
    public banForm: FormGroup;
    public selectedUserId: number;
    public banDaysCount = 0;

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;

    @Select(AuthState.isModerator) isModerator$: Observable<boolean>;

    @Select(AuthState.userId) userId$: Observable<number>;

    @Select(UsersState.user) user$: Observable<GetUserDetailQuery.Response>;

    @Select(AuthState.isMainModerator) isMainModerator$: Observable<boolean>;

    constructor(
        private service: UserService,
        public dialog: MatDialog,
        private store: Store,
        private formBuilder: FormBuilder,
        private titleService: CustomTitleService,
        private cd: ChangeDetectorRef,
        private authService: AuthService) {
        super();
    }

    public ngOnInit(): void {
        this.initBanForm();
        const usersState = this.store.selectSnapshot(UsersState);
        this.titleService.setTitle(usersState.user.userName);
    }

    public logout(): void {
        this.authService.logout();
    }

    public onSubmitBan(): void {
        const banDaysCount = this.banForm.controls['banDaysCount'].value;
        const sub = this.service.ban(this.item.id, banDaysCount)
            .subscribe((data: boolean) => {
                if (data) {
                    const time = new Date();
                    this.item.lockoutEnd = new Date(time.setHours(time.getHours() + banDaysCount * 24 * 60 * 60));
                    this.banForm.controls['banDaysCount'].patchValue(null);
                }
            });

        this.subscriptions.push(sub);
    }

    public onChangeAvatar(event: any): void {
        const file = event.currentTarget.files[0];
        if (file) {
            if (file.size > 251 * 1024) {
                alert('Размер изображения не должен превышать 250КБ');
                return;
            }
            const sub = this.service.updateAvatar(file)
                .subscribe((result: any) => this.item.photo = `${result.path}?${Math.random()}`);
            this.subscriptions.push(sub);
        }
    }

    public resetAvatar(): void {
        const sub = this.service.resetAvatar(this.item.id)
            .subscribe((result: any) => this.item.photo = `${result.path}?${Math.random()}`);
        this.subscriptions.push(sub);
    }

    public unban(): void {
        const sub = this.service.unban(this.item.id)
            .subscribe((data: boolean) => {
                if (data) {
                    this.item.lockoutEnd = null;
                }
            });
        this.subscriptions.push(sub);
    }

    public writePm(): void {
        this.selectedUserId = this.item.id;
    }

    public closePmWindow(event: any): void {
        this.selectedUserId = null;
    }

    public onEditRoleGroup(): void {
        const data: ChangeRoleGroupDialogData = {
            user: this.store.selectSnapshot(UsersState.user)
        };
        const changeRoleGpoupDialogRef = this.dialog.open(ChangeRoleGroupDialogComponent, {
            data
        });

        changeRoleGpoupDialogRef.afterClosed().subscribe(() => this.cd.markForCheck());
    }

    private initBanForm(): void {
        this.banForm = this.formBuilder.group({
            banDaysCount: ['', Validators.min(1)]
        });
    }
}
