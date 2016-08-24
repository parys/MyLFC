import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from "./app.routes";
import { NewsListComponent } from "./news/news-list/news-list.component";
import { Configuration } from "./app.constants";

import { NewsDetailComponent } from "./news/news-detail/news-detail.component";
import { AccountSignupComponent } from "./account/account-signup/account-signup.component";
import { NewsService } from "./news/shared/news.service";

@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule ],       // module dependencies
    declarations: [AppComponent, NewsListComponent, NewsDetailComponent, AccountSignupComponent],   // components and directives
    bootstrap: [AppComponent],     // root component
    providers: [NewsService, Configuration]                    // services
})
export class AppModule { }