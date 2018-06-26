import { Routes } from "@angular/router";
import { MaterialListComponent } from "./material";
import { helperRoutes } from "./admin/admin.routes";
import { homeRoutes } from "./home/home.routes";

export const routes: Routes = [
    ...helperRoutes,
    ...homeRoutes,
    {
        path: "account",
        loadChildren: "./account/lazy/account.module#AccountModule"
    },
    {
        path: "blogs",
        loadChildren: "./material/lazy/material.module#MaterialModule"
    },
    {
        path: "blogCategories",
        loadChildren: "./materialCategory/lazy/materialCategory.module#MaterialCategoryModule"
    },
    {
        path: "materialComments",
        loadChildren: "./comment/lazy/comment.module#CommentModule"
    },
    {
        path: "clubs",
        loadChildren: "./club/lazy/club.module#ClubModule"
    },
    {
        path: "images",
        loadChildren: "./image/lazy/image.module#ImageModule"
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
        path: "news",
        loadChildren: "./material/lazy/material.module#MaterialModule"
    },
    {
        path: "newsCategories",
        loadChildren: "./materialCategory/lazy/materialCategory.module#MaterialCategoryModule"
    },
    {
        path: "notifications",
        loadChildren: "./notification/lazy/notification.module#NotificationModule"
    },
    {
        path: "persons",
        loadChildren: "./person/lazy/person.module#PersonModule"
    },
    {
        path: "pms",
        loadChildren: "./pm/lazy/pm.module#PmModule"
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
        path: "stadiums",
        loadChildren: "./stadium/lazy/stadium.module#StadiumModule"
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
    { path: "", component: MaterialListComponent, data: { title: "MyLFC.ru - Сайт русскоязычных болельщиков ФК \"Ливерпуль\"" } }
];