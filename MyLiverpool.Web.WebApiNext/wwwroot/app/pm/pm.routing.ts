import { Routes } from "@angular/router";
import { PmListComponent } from "./pm-list.component";
import { PmDetailComponent } from "./pm-detail.component";

export const pmRoutes: Routes = [
    { path: "pm", component: PmListComponent },
    { path: "pm/:id", component: PmDetailComponent }
];