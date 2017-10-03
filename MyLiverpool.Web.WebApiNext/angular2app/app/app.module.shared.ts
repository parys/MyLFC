import { NgModule, LOCALE_ID } from "@angular/core";
import { Title, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { ForumModule } from "./forum/index";
import { Configuration } from "./app.constants";
import * as material from "./material/index";
import { EditorModule } from "./editor/index";
import * as materialCategory from "./materialCategory/index";
import * as auth from "./auth/index";
import * as chat from "./chat/index";
import { ClubModule } from "./club/index";
import * as home from "./home/index";
import * as image from "./image/index";
import { InjuryModule } from "./injury/index";
import { MatchModule } from "./match/index";
import { PersonModule } from "./person/index";
import * as roleGroup from "./roleGroup/index";
import * as season from "./season/index";
import { SharedModule } from "./shared/index";
import * as user from "./user/index";
import { PmModule } from "./pm/index";
import { StadiumModule } from "./stadium/index";
import { WishModule } from "./wish/index";
import * as admin from "./admin/index";
import { NgxPaginationModule } from "ngx-pagination";
import { ReCaptchaModule } from "angular2-recaptcha";
import { Ng2BreadcrumbModule, BreadcrumbService } from "ng2-breadcrumb/ng2-breadcrumb";
import * as angMaterial from '@angular/material';
import "rxjs/add/operator/mergeMap";
import { AccountModule } from "./account/index";
import { TransferModule } from "./transfer/index";
import { CommentModule } from "./comment/index";
import { NotificationModule } from "./notification/index";

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'mylfc-app' }),
        EditorModule,
        HttpClientModule,
        AccountModule,
      //  ForumModule,
        InjuryModule,
        angMaterial.MdAutocompleteModule,
        angMaterial.MdButtonModule,
        angMaterial.MdCardModule,
        angMaterial.MdCheckboxModule,
        angMaterial.MdDatepickerModule,
        angMaterial.MdDialogModule,
        angMaterial.MdIconModule,
        angMaterial.MdInputModule,
        angMaterial.MdMenuModule,
        angMaterial.MdNativeDateModule,
        angMaterial.MdSnackBarModule,
        angMaterial.MdSelectModule,
        angMaterial.MdSlideToggleModule,
        angMaterial.MdTabsModule,
        Ng2BreadcrumbModule.forRoot(),
        NgxPaginationModule,
        CommentModule,
        ClubModule,
        MatchModule,
        TransferModule,
        NotificationModule,
        PersonModule,
        PmModule,
        RouterModule.forRoot(routes),
        ReCaptchaModule,
        SharedModule,
        StadiumModule,
        WishModule
    ],
    declarations: [
        chat.MaxiChatComponent,
        chat.MiniChatComponent,
        home.StaticPageComponent,
        home.NavbarComponent,
        home.SidebarLeftComponent,
        home.SidebarRightComponent,
        image.ImageAdditionComponent,
        image.ImageDetailComponent,
        image.ImageListComponent,
        materialCategory.MaterialCategoryEditComponent,
        materialCategory.MaterialCategoryListComponent,
        roleGroup.RoleGroupListComponent,
        season.SeasonCalendarComponent,
        season.SeasonEplTableComponent,
        season.SeasonEditComponent,
        season.SeasonListComponent,
        AppComponent,
        admin.CupTableComponent,
        admin.EplTableComponent,
        admin.PageEditorComponent,
        material.MaterialListComponent,
        material.MaterialDetailComponent,
        material.MaterialEditComponent,
        material.MaterialActivateDialogComponent,
        user.UserBirthdayComponent,
        user.UserDetailComponent,
        user.UserListComponent,
        user.UserEditComponent,
        user.UserConfigComponent,
        user.UserOnlineCounterComponent
    ], // components and directives
    entryComponents: [
        material.MaterialActivateDialogComponent,
    ],
    providers: [// services  
        auth.AuthService,
        auth.RoleGuard,
        auth.UnSignedGuard,
        BreadcrumbService,
        chat.ChatMessageService,
        image.ImageService,
        materialCategory.MaterialCategoryService,
        roleGroup.RoleGroupService,
        season.SeasonService,
        admin.AdminService,
        { provide: LOCALE_ID, useValue: "ru-RU" },
        Configuration,
        material.MaterialService,
        Title,
        user.UserService
    ]
})
export class AppModuleShared { }