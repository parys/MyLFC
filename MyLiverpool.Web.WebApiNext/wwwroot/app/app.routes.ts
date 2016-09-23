import { ModuleWithProviders }   from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { AccountSignupComponent } from "./account/account-signup.component";
import { NewsEditComponent } from "./news/news-edit/news-edit.component";
import { authRoutes, authProviders } from "./auth/auth.routing";
import { AuthGuard } from "./auth/auth-guard.service";
import { newsCategoryRoutes } from "./newsCategory/newsCategory.routing";
import { newsRoutes } from "./news/news.routing";
import {userRoutes} from "./user/user.routing";
const routes: Routes  = [
   // { path: 'signup', component: AccountSignupComponent, canActivate: [AuthGuard] },
    ...authRoutes,
    ...newsCategoryRoutes,
    ...newsRoutes,
    ...userRoutes,
    { path: '', component: NewsListComponent }
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);