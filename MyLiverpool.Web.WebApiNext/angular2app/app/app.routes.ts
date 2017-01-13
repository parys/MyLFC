import { Routes } from "@angular/router";
import { MaterialListComponent } from "./material/index";
import { accountRoutes } from "./account/account.routing";
import { clubRoutes } from "./club/club.routing";
import { materialCategoryRoutes } from "./materialCategory/materialCategory.routing";
import { materialRoutes } from "./material/material.routing";
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
import { roleGroupRoutes } from "./roleGroup/roleGroup.routing";

export const routes: Routes = [
    ...accountRoutes,
    ...clubRoutes,
    ...forumSectionRoutes,
    ...forumSubsectionRoutes,
    ...forumThemeRoutes,
    ...homeRoutes,
    ...imageRoutes,
    ...matchRoutes,
    ...materialCommentRoutes,
    ...materialCategoryRoutes,
    ...materialRoutes,
    ...playerRoutes,
    ...pmRoutes,
    ...roleGroupRoutes,
    ...seasonRoutes,
    ...userRoutes,
    ...wishRoutes,
    { path: "", component: MaterialListComponent, data: { title: "Главная", breadcrumb: "Главная", type: "News" } }
];