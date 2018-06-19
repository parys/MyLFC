import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ZComponent } from "./z.component";
import { zRoutes } from "./z.routes";
//import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        //     SharedModule,
        CommonModule,
        RouterModule.forChild(zRoutes)
    ],
    declarations: [
        ZComponent
    ],
    providers: [
        
    ]
})
export class ZModule { }