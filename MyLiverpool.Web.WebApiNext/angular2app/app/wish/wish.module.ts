import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WishListComponent } from "./wish-list.component";
import { WishEditComponent } from "./wish-edit.component";
import { WishService } from "./wish.service";
import { wishRoutes } from "./wish.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(wishRoutes),
        ReactiveFormsModule
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