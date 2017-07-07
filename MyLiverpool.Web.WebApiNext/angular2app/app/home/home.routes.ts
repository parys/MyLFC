import { Routes } from "@angular/router";
import { StaticPageComponent } from "./index";
import { HelperType } from "../admin/helperType.enum";

export const homeRoutes: Routes = [
    { path: "clubHistory", component: StaticPageComponent, data: { title: "История клуба", type: HelperType.ClubHistory } },
    { path: "copyright", component: StaticPageComponent, data: { title: "О перепечатке информации", type: HelperType.Copyright } },
    { path: "rules", component: StaticPageComponent, data: { title: "Правила", type: HelperType.Rules } },
    { path: "aboutClub", component: StaticPageComponent, data: { title: "О клубе", type: HelperType.AboutClub } },
    { path: "about", component: StaticPageComponent, data: { title: "О нас", type: HelperType.About } },
    { path: "job", component: StaticPageComponent, data: { title: "Работа на сайте", type: HelperType.Job } }
];