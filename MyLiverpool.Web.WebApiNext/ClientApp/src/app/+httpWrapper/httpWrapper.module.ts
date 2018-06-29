import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpWrapper } from "./httpWrapper.service";
import { Configuration } from "@app/app.constants";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        Configuration,
        HttpWrapper
    ]
})
export class HttpWrapperModule { }  