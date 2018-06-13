import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";
import { userRoutes } from "./user.routes";
import { UserEditComponent } from "./user-edit";
import { UserListComponent } from "./user-list";
import { UserCoreModule } from "./+core";
import { UserBirthdayComponent } from "./user-birthday";
import { UserDetailComponent } from "./user-detail";
import { UserConfigComponent } from "./user-config";
import { UserOnlineCounterComponent } from "./user-online-counter";
import { PmModule } from "@app/pm";
//import { SignalRModule } from "@app/+signalr";

@NgModule({
    imports: [
        SharedModule,
        UserCoreModule,
        PmModule,
        RouterModule.forRoot(userRoutes)//,
     //   SignalRModule
    ],
    declarations: [
        UserBirthdayComponent,
        UserDetailComponent,
        UserConfigComponent,
        UserOnlineCounterComponent,
        UserEditComponent,
        UserListComponent,
    ],
    exports: [
        UserOnlineCounterComponent,
        UserBirthdayComponent,
        PmModule
    ]
})
export class UserModule { }