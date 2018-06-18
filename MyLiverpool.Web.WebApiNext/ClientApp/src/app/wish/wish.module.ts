import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WishListComponent } from "./wish-list";
import { WishEditComponent } from "./wish-edit";
import { WishService } from "./wish.service";
import { wishRoutes } from "./wish.routes";
import { NgxPaginationModule } from "ngx-pagination";
import { SharedModule } from "@app/shared";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(wishRoutes),
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule
    ],
    declarations: [
        WishEditComponent,
        WishListComponent
    ],
    providers: [
        WishService
    ]
})
export class WishModule { }