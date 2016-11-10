import { RouterModule } from "@angular/router";
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
var routes = accountRoutes.concat(authRoutes, forumSectionRoutes, homeRoutes, materialCommentRoutes, newsCategoryRoutes, newsRoutes, pmRoutes, userRoutes, wishRoutes, [
    { path: "", component: NewsListComponent }
]);
export var appRoutingProviders = [
    authProviders
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map