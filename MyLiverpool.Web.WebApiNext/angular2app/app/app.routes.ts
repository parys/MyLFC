import { ModuleWithProviders } from "@angular/core";
import { Routes } from "@angular/router";
import { NewsListComponent } from "./news/index";
import { authRoutes, authProviders } from "./auth/auth.routing";
import { accountRoutes } from "./account/account.routing";
import { clubRoutes } from "./club/club.routing";
import { newsCategoryRoutes } from "./newsCategory/newsCategory.routing";
import { newsRoutes } from "./news/news.routing";
import { userRoutes } from "./user/user.routing";
import { playerRoutes } from "./player/player.routing";
import { pmRoutes } from "./pm/pm.routing";
import { homeRoutes } from "./home/home.routing";
import { imageRoutes } from "./image/image.routing";
import { forumSectionRoutes } from "./forumSection/forumSection.routing";
import { forumSubsectionRoutes } from "./forumSubsection/forumSubsection.routing";
import { forumThemeRoutes } from "./forumTheme/forumTheme.routing";
import { wishRoutes } from "./wish/wish.routing";
import { materialCommentRoutes } from "./materialComment/materialComment.routing";
import { matchRoutes } from "./match/match.routing";
import { seasonRoutes } from "./season/season.routing";

export const routes: Routes = [
    ...accountRoutes,
    ...authRoutes,
    ...clubRoutes,
    ...forumSectionRoutes,
    ...forumSubsectionRoutes,
    ...forumThemeRoutes,
    ...homeRoutes,
    ...imageRoutes,
    ...matchRoutes,
    ...materialCommentRoutes,
    ...newsCategoryRoutes,
    ...newsRoutes,
    ...playerRoutes,
    ...pmRoutes,
    ...seasonRoutes,
    ...userRoutes,
    ...wishRoutes,
    { path: "", component: NewsListComponent, data: { title: "Главная", breadcrumb: "Главная" } }
];

export const appRoutingProviders: any[] = [
    authProviders
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { });