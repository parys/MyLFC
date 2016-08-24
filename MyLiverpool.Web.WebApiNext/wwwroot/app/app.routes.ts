import { RouterModule, Routes  } from '@angular/router';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
//import { AccountSignupComponent } from "./account/account-signup/account-signup.component";

const routes: Routes  = [
    //{ path: 'signup', component: AccountSignupComponent },
   // { path: 'news', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    // { path: '/edit', component: NewsEditComponent }
    { path: '', component: NewsListComponent }
];

export const routing = RouterModule.forRoot(routes);