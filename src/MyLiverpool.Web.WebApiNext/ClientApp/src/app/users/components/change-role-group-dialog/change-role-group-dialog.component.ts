import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Store, Select } from '@ngxs/store';
import { GetUserDetailQuery, ChangeUserRoleGroupCommand } from '@network/shared/users';
import { UsersState, GetRoleGroups, ChangeUserRoleGroup } from '@users/store';
import { Observable } from 'rxjs';
import { RoleGroup } from '@domain/models';

// import { markFormAsTouched } from '@domain/static';

@Component({
    selector: 'change-role-group-dialog.component',
    templateUrl: './change-role-group-dialog.component.html',
    styleUrls: ['./change-role-group-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeRoleGroupDialogComponent implements OnInit {

    public roleForm: FormGroup;
    
    @Select(UsersState.roleGroups) roleGroups$: Observable<RoleGroup[]>;

    constructor(public dialogRef: MatDialogRef<ChangeRoleGroupDialogComponent>,
                private formBuilder: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public dialogData: ChangeRoleGroupDialogData,
                private store: Store) {
    }

    public ngOnInit(): void {
        this.store.dispatch(new GetRoleGroups());
        this.initRoleForm();
    }

    public onSave(): void {
        // if (this.roleForm.invalid) {
        //     markFormAsTouched(this.roleForm);
        //     return;
        // }

        const roleGroup = { ...this.roleForm.value, userId: this.dialogData.user.id };

         this.store.dispatch(new ChangeUserRoleGroup(new ChangeUserRoleGroupCommand.Request(roleGroup)))
             .subscribe(() => {
        //         markFormAsUntouched(this.roleForm);
                 this.onCancel();
             
        //         error => {
        //             this.store.dispatch(new ShowNotification(
        //                 NotificationMessage.error(this.translate.instant('MESSAGES.ERROR'),
        //                     ('something went wrong at server'))));  // todo implement map to appropriate field?
                 });
    }

    public onCancel(): void {
        this.dialogRef.close();
    }

    private initRoleForm(): void {
        this.roleForm = this.formBuilder.group({
            roleGroupId: [this.dialogData.user.roleGroupId, Validators.required]
        });
    }

}

export interface ChangeRoleGroupDialogData {
    user: GetUserDetailQuery.Response;
}
