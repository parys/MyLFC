import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from "./app.routes";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { Configuration } from "./app.constants";

import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { AccountSignupComponent } from "./account/account-signup.component";
import { NewsService } from "./news/shared/news.service";
import { TranslateModule } from 'ng2-translate';
import {NewsEditComponent} from "./news/news-edit/news-edit.component";
import {NewsCategoryService} from "./newsCategory/shared/newsCategory.service";
import {AccountSigninComponent} from "./account/account-signin.component";
import {HttpWrapper} from "./shared/httpWrapper";
import {AuthGuard} from "./auth/auth-guard.service";
import {AuthService} from "./auth/auth.service";
import {LocalStorage} from "./shared/localStorage";
import {SecuredDirective} from "./shared/secured.directive";
//import {SecuredLinkComponent} from "./shared/securedLink.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing, TranslateModule.forRoot()],       // module dependencies RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
    declarations: [AccountSigninComponent, AccountSignupComponent, AppComponent, NewsListComponent, NewsDetailComponent, NewsEditComponent, SecuredDirective],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [NewsService, Configuration, appRoutingProviders, NewsCategoryService, AuthService, AuthGuard, HttpWrapper, LocalStorage]                    // services
})
export class AppModule { }