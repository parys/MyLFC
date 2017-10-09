import { NgModule, LOCALE_ID } from "@angular/core";
import { Title, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { ForumModule } from "./forum";
import { Configuration } from "./app.constants";
import * as material from "./material";
import { EditorModule } from "./editor";
import * as chat from "./chat";
import { ClubModule } from "./club";
import * as home from "./home";
import * as image from "./image";
import { InjuryModule } from "./injury";
import { MatchModule } from "./match";
import { PersonModule } from "./person";
import * as roleGroup from "./roleGroup";
import { SharedModule } from "./shared";
import { StadiumModule } from "./stadium";
import { WishModule } from "./wish";
import * as admin from "./admin";
import { NgxPaginationModule } from "ngx-pagination";
import { AccountModule } from "./account";
import { TransferModule } from "./transfer";
import { CommentModule } from "./comment";
import { NotificationModule } from "./notification";
import { MaterialCategoryModule } from "./materialCategory";
import { UserModule } from "./user";
import { SeasonModule } from "./season";

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'mylfc-app' }),
        SharedModule,
        EditorModule,
        HttpClientModule,
        AccountModule,
      //  ForumModule,
        InjuryModule,
        NgxPaginationModule,
        CommentModule,
        ClubModule,
        MatchModule,
        TransferModule,
        MaterialCategoryModule,
        NotificationModule,
        PersonModule,
        RouterModule.forRoot(routes),
        SeasonModule,
        StadiumModule,
        UserModule,
        WishModule,
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
        roleGroup.RoleGroupListComponent,
        AppComponent,
        admin.CupTableComponent,
        admin.EplTableComponent,
        admin.PageEditorComponent,
        material.MaterialListComponent,
        material.MaterialDetailComponent,
        material.MaterialEditComponent,
        material.MaterialActivateDialogComponent
    ], // components and directives
    entryComponents: [
        material.MaterialActivateDialogComponent,
    ],
    providers: [// services
        chat.ChatMessageService,
        image.ImageService,
        roleGroup.RoleGroupService,
        admin.AdminService,
        { provide: LOCALE_ID, useValue: "ru-RU" },
        Configuration,
        material.MaterialService,
        Title
    ]
})
export class AppModuleShared { }