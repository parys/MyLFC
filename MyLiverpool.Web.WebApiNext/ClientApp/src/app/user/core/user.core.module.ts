import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { RouterModule } from "@angular/router";
import { UserService } from "./user.service";
import { UserBirthdayComponent } from "./user-birthday";
import { UserOnlineCounterComponent } from "./user-online-counter";
import { PmModule } from "@app/pm";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PmModule
    ],
    declarations: [
        UserBirthdayComponent,
        UserOnlineCounterComponent
    ],
    exports: [
        UserOnlineCounterComponent,
        UserBirthdayComponent,
        PmModule
    ],
    providers: [
        UserService
    ]
})
export class UserCoreModule { }