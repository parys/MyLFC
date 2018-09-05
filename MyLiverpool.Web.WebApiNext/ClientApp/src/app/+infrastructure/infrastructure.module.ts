import { NgModule } from "@angular/core";
import { HttpWrapperModule } from "@app/+httpWrapper";
import { Configuration } from "@app/app.constants";
import { BaseRestService } from "./base-rest.service";

@NgModule({
    imports: [
        HttpWrapperModule,
        HttpWrapperModule
    ],
    providers: [
        Configuration,
        BaseRestService
    ]
})
export class InfrastructureModule { }  