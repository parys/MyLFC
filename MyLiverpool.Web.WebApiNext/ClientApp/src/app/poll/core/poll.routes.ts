import { Routes } from "@angular/router";

export const pollCoreRoutes: Routes = [
    {
        path: "polls",
        loadChildren: "../lazy/poll.module#PollModule"
    },
];