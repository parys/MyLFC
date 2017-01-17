import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WishListComponent } from "./wish-list.component";
import { WishEditComponent } from "./wish-edit.component";
import { WishService } from "./wish.service";
import { wishRoutes } from "./wish.routes";
import { PaginationModule } from "ng2-bootstrap";
import { SharedModule } from "../shared/index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(wishRoutes),
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        SharedModule
    ],
    declarations: [
        WishEditComponent,
        WishListComponent
    ],
    exports: [
    ],
    providers: [
        WishService
    ]
})
export class WishModule { }