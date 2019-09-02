import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/index';

import { RoleGroupService } from '@role-groups/core/roleGroup.service';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        RoleGroupService
        ]
})
export class RoleGroupCoreModule { }
