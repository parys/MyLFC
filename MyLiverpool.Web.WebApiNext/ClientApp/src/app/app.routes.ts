import { Routes } from "@angular/router";
import { MaterialListComponent } from "./material";
import { helperRoutes } from "./admin/admin.routes";
import { materialRoutes } from "./material/material.routes";
import { homeRoutes } from "./home/home.routes";
import { imageRoutes } from "./image/image.routes";

export const routes: Routes = [
    ...helperRoutes,
    ...homeRoutes,
    ...imageRoutes,
    ...materialRoutes,
    {
        path: "materialComments",
        loadChildren: "./comment/lazy/comment.module#CommentModule"
    },
    {
        path: "clubs",
        loadChildren: "./club/lazy/club.module#ClubModule"
    },
    {
        path: "injuries",
        loadChildren: "./injury/lazy/injury.module#InjuryModule"
    },
    {
        path: "matches",
        loadChildren: "./match/lazy/match.module#MatchModule"
    },
    {
        path: "persons",
        loadChildren: "./person/lazy/person.module#PersonModule"
    },
    {
        path: "roleGroups",
        loadChildren: "./roleGroup/lazy/roleGroup.module#RoleGroupModule"
    },
    {
        path: "seasons",
        loadChildren: "./season/lazy/season.module#SeasonModule"
    },
    {
        path: "transfers",
        loadChildren: "./transfer/lazy/transfer.module#TransferModule"
    },
    {
        path: "users",
        loadChildren: "./user/lazy/user.module#UserModule"
    },
    {
        path: "wishes",
        loadChildren: "./wish/wish.module#WishModule"
    },
    { path: "", component: MaterialListComponent, data: { title: "MyLFC.ru - Сайт русскоязычных болельщиков ФК \"Ливерпуль\"", type: "Both" } }
];