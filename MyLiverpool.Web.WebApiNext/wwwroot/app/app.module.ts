import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from "./app.routes";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { Configuration } from "./app.constants";

import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { AccountSignupComponent } from "./account/account-signup/account-signup.component";
import { NewsService } from "./news/shared/news.service";
import { TranslateModule } from 'ng2-translate';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing, TranslateModule.forRoot()],       // module dependencies
    declarations: [AccountSignupComponent, AppComponent, NewsListComponent, NewsDetailComponent],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [NewsService, Configuration, appRoutingProviders]                    // services
})
export class AppModule { }