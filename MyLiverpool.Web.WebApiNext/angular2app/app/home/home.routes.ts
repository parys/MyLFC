﻿import { Routes } from "@angular/router";
import { ClubHistoryComponent, RulesComponent, AboutClubComponent, AboutComponent, CopyrightComponent, JobComponent } from "./index";

export const homeRoutes: Routes = [
    { path: "clubHistory", component: ClubHistoryComponent, data: { title: "История клуба" } },
    { path: "copyright", component: CopyrightComponent, data: { title: "О перепечатке информации" } },
    { path: "rules", component: RulesComponent, data: { title: "Правила" } },
    { path: "aboutClub", component: AboutClubComponent, data: { title: "О клубе" } },
    { path: "about", component: AboutComponent, data: { title: "О нас" } },
    { path: "job", component: JobComponent, data: { title: "Работа на сайте" } }
];