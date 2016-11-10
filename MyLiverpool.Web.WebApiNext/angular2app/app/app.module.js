var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { BrowserModule, Title } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { routing, appRoutingProviders } from "./app.routes";
import { Configuration } from "./app.constants";
import { NewsEditComponent, NewsDetailComponent, NewsListComponent, NewsService } from "./news/index";
import { NewsCategoryService } from "./newsCategory/shared/newsCategory.service";
import { AuthGuard, AuthService } from "./auth/index";
import { HttpWrapper, LocalStorageMine, SecuredDirective } from "./shared/index";
import { ForumSectionListComponent, ForumSectionService } from "./forumSection/index";
import * as account from "./account/index";
import { NewsCategoryListComponent } from "./newsCategory/newsCategory-list.component";
import { NewsCategoryEditComponent } from "./newsCategory/newsCategory-edit.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserService } from "./user/user.service";
import { UserListComponent } from "./user/user-list.component";
import { PmListComponent, PmDetailComponent, PmEditComponent, PmService } from "./pm/index";
import { ClubHistoryComponent, RulesComponent, RightSidebarComponent } from "./home/index";
import { WishListComponent, WishService, WishEditComponent } from "./wish/index";
import { MaterialCommentListComponent, MaterialCommentService, MaterialCommentSectionComponent, MaterialCommentDetailComponent } from "./materialComment/index";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { RolesCheckedService, GlobalValidators } from "./shared/index";
import { AdminService, EplTableComponent } from "./admin/index";
import { DatepickerModule, ModalModule, PaginationModule } from "ng2-bootstrap/ng2-bootstrap";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                DatepickerModule,
                FormsModule,
                HttpModule,
                MaterialModule.forRoot(),
                ModalModule,
                Ng2AutoCompleteModule,
                PaginationModule,
                ReactiveFormsModule,
                routing],
            declarations: [
                account.AccountSigninComponent,
                account.AccountSignupComponent,
                account.ConfirmEmailComponent,
                account.ForgotPasswordComponent,
                account.ResetPasswordComponent,
                account.UnconfirmedEmailComponent,
                AppComponent,
                ClubHistoryComponent,
                EplTableComponent,
                ForumSectionListComponent,
                MaterialCommentDetailComponent,
                MaterialCommentListComponent,
                MaterialCommentSectionComponent,
                NewsCategoryEditComponent,
                NewsCategoryListComponent,
                NewsListComponent,
                NewsDetailComponent,
                NewsEditComponent,
                PmDetailComponent,
                PmEditComponent,
                PmListComponent,
                RightSidebarComponent,
                RulesComponent,
                SecuredDirective,
                UserDetailComponent,
                UserListComponent,
                WishEditComponent,
                WishListComponent],
            bootstrap: [AppComponent],
            providers: [
                account.AccountService,
                AdminService,
                appRoutingProviders,
                AuthGuard,
                AuthService,
                Configuration,
                ForumSectionService,
                HttpWrapper,
                GlobalValidators,
                { provide: LocalStorageMine, useClass: LocalStorageMine },
                MaterialCommentService,
                NewsService,
                NewsCategoryService,
                PmService,
                RolesCheckedService,
                Title,
                UserService,
                WishService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map