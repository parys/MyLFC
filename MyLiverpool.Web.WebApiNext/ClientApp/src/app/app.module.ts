import { NgModule, LOCALE_ID } from "@angular/core";
import { Title, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import { PrebootModule } from "preboot";

import localeRU from "@angular/common/locales/ru";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
//import { ForumModule } from "./forum";
import { Configuration } from "./app.constants";
import { ChatModule } from "./chat";
import * as home from "./home";
import { InjuryCoreModule } from "./injury";
import { MatchCoreModule } from "./match";
import { MaterialCoreModule } from "./material";
import { PersonCoreModule } from "./person";
import { SharedModule } from "./shared";
import * as admin from "./admin";
import { AccountCoreModule } from "./account";
import { TransferCoreModule } from "./transfer";
import { CommentCoreModule } from "./comment";
import { NotificationCoreModule } from "./notification";
import { UserCoreModule } from "./user";

registerLocaleData(localeRU);

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: "mylfc" }),
        PrebootModule.withConfig({ appRoot: "app" }),
        SharedModule,
        HttpClientModule,
        AccountCoreModule,
      //  ForumModule,
        InjuryCoreModule,
        ChatModule,
        CommentCoreModule,
        MatchCoreModule,
        TransferCoreModule,
        MaterialCoreModule,
        NotificationCoreModule,
        PersonCoreModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: "reload", initialNavigation: "enabled" }),
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