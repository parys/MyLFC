import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpWrapperModule } from "@app/+httpWrapper";
import { Configuration } from "@app/app.constants";
import { AuthService } from "./auth.service";
import { StorageModule } from "@app/+storage";
import { RoleGuard } from "./role-guard.service";
import { UnSignedGuard } from "./unsigned-guard.service";
import { RolesCheckedService } from "./roles-checked.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpWrapperModule,
        StorageModule
    ],
    providers: [
        Configuration,
        AuthService,
        RoleGuard,
        UnSignedGuard,
        RolesCheckedService,
    ]
})
export class AuthModule { }  