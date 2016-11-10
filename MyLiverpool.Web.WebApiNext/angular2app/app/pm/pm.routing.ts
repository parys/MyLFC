import { Routes } from "@angular/router";
import { PmListComponent, PmDetailComponent, PmEditComponent } from "./index";

export const pmRoutes: Routes = [
    { path: "pm", component: PmListComponent },
    { path: "pm/:id", component: PmDetailComponent },
    { path: "pm/:id/edit", component: PmEditComponent }
];