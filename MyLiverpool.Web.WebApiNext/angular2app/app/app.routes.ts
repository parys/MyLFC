import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsListComponent } from "./news/index";
import { authRoutes, authProviders } from "./auth/auth.routing";
import { accountRoutes } from "./account/account.routing";
import { newsCategoryRoutes } from "./newsCategory/newsCategory.routing";
import { newsRoutes } from "./news/news.routing";
import { userRoutes } from "./user/user.routing";
import { pmRoutes } from "./pm/pm.routing";
import { homeRoutes } from "./home/home.routing";
import { forumSectionRoutes } from "./forumSection/forumSection.routing";
import { wishRoutes } from "./wish/wish.routing";
import { materialCommentRoutes } from "./materialComment/materialComment.routing";
import { matchRoutes } from "./match/match.routing";

const routes: Routes = [
    ...accountRoutes,
    ...authRoutes,
    ...forumSectionRoutes,
    ...homeRoutes,
    ...matchRoutes,
    ...materialCommentRoutes,
    ...newsCategoryRoutes,
    ...newsRoutes,
    ...pmRoutes,
    ...userRoutes,
    ...wishRoutes,
    { path: "", component: NewsListComponent }
];

export const appRoutingProviders: any[] = [
    authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);