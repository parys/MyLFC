import { RouterModule, Routes  } from '@angular/router';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { AccountSignupComponent } from "./account/account-signup/account-signup.component";
import { NewsEditComponent } from "./news/news-edit/news-edit.component";
const routes: Routes  = [
    { path: 'signup', component: AccountSignupComponent },
    { path: 'news', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: 'news/:id/edit', component: NewsEditComponent },
    { path: '', component: NewsListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);