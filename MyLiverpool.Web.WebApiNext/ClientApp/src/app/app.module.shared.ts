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
import * as material from "./material";
import { EditorModule } from "./editor";
import { ChatModule } from "./chat";
import { ClubCoreModule } from "./club";
import * as home from "./home";
import * as image from "./image";
import { InjuryModule } from "./injury";
import { MatchModule } from "./match";
import { PersonCoreModule } from "./person";
import { SharedModule } from "./shared";
import { StadiumModule } from "./stadium";
import * as admin from "./admin";
import { AccountModule } from "./account";
import { TransferModule } from "./transfer";
import { CommentModule } from "./comment";
import { NotificationModule } from "./notification";
import { MaterialCategoryModule } from "./materialCategory";
import { UserCoreModule } from "./user";
import { SeasonCoreModule } from "./season";

registerLocaleData(localeRU);

@NgModule({
    imports: [
        BrowserModule,//.withServerTransition({ appId: 'mylfc-app' }),
        SharedModule,
        EditorModule,
        HttpClientModule,
        AccountModule,
      //  ForumModule,
        InjuryModule,
        ChatModule,
        CommentModule,
        ClubCoreModule,
        MatchModule,
        TransferModule,
        MaterialCategoryModule,
        NotificationModule,
        PersonCoreModule,
        SeasonCoreModule,
        RouterModule.forRoot(routes),
        StadiumModule,
        UserCoreModule,
     //   WishModule,
    ],
    declarations: [
        home.StaticPageComponent,
        home.NavbarComponent,
        home.SidebarLeftComponent,
        home.SidebarRightComponent,
        image.ImageAdditionComponent,
        image.ImageDetailComponent,
        image.ImageListComponent,
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
        image.ImageService,
        admin.AdminService,
        { provide: LOCALE_ID, useValue: "ru-RU" },
        Configuration,
        material.MaterialService,
        Title
    ]
})
export class AppModuleShared { }