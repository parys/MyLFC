import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { UserService } from "./user.service";

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        UserService
    ]
})
export class UserCoreModule { }