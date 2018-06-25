import { NgModule, LOCALE_ID } from "@angular/core";
import { Title, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";

import localeRU from "@angular/common/locales/ru";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
//import { ForumModule } from "./forum";
import { Configuration } from "./app.constants";
import { ChatModule } from "./chat";
import { ClubCoreModule } from "./club";
import * as home from "./home";
import { InjuryCoreModule } from "./injury";
import { MatchCoreModule } from "./match";
import { MaterialCoreModule } from "./material";
import { PersonCoreModule } from "./person";
import { SharedModule } from "./shared";
import { StadiumModule } from "./stadium";
import * as admin from "./admin";
import { AccountModule } from "./account";
import { TransferCoreModule } from "./transfer";
import { CommentCoreModule } from "./comment";
import { NotificationCoreModule } from "./notification";
import { MaterialCategoryModule } from "./materialCategory";
import { UserCoreModule } from "./user";
import { SeasonCoreModule } from "./season";
//import { MaterialModule } from "./material/lazy/material.module";

registerLocaleData(localeRU);

@NgModule({
    imports: [
        BrowserModule,//.withServerTransition({ appId: 'mylfc-app' }),
        SharedModule,
        HttpClientModule,
        AccountModule,
      //  ForumModule,
        InjuryCoreModule,
        ChatModule,
        CommentCoreModule,
        ClubCoreModule,
        MatchCoreModule,
        TransferCoreModule,
        MaterialCategoryModule,
        MaterialCoreModule,
      //  MaterialModule,//todo temporary
        NotificationCoreModule,
        PersonCoreModule,
        SeasonCoreModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),
        StadiumModule,
        UserCoreModule
    ],
    declarations: [
        home.StaticPageComponent,
        home.NavbarComponent,
        home.SidebarLeftComponent,
        home.SidebarRightComponent,
        AppComponent,
        admin.CupTableComponent,
        admin.EplTableComponent,
        admin.PageEditorComponent,
    ],
    providers: [// services
        admin.AdminService,
        { provide: LOCALE_ID, useValue: "ru-RU" },
        Configuration,
        Title
    ]
})
export class AppModuleShared { }