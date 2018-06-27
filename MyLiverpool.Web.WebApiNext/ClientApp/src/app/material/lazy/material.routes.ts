import { Routes } from "@angular/router";
import { MaterialDetailComponent } from "./material-detail";
import { MaterialListComponent } from "../core";

export const materialRoutes: Routes = [
    {
        path: "",
        component: MaterialListComponent
    },
    {
        path: ":id",
        children: [
            {
                path: "",
                component: MaterialDetailComponent
            },
            {
                path: "edit",
                loadChildren: "./+material-edit/material-edit.module#MaterialEditModule"
            }
        ]
    }
];