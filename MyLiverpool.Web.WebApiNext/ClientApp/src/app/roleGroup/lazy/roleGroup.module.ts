import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { roleGroupRoutes } from "./roleGroup.routes";
import { RoleGroupListComponent } from "./roleGroup-list";
import { RoleGroupCoreModule } from "../roleGroup-core.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(roleGroupRoutes),
        RoleGroupCoreModule
    ],
    declarations: [
        RoleGroupListComponent
    ]
})
export class RoleGroupModule { }