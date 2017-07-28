import { Routes } from "@angular/router";
import { LoanEditComponent } from "./loan-edit.component";
import { LoanListComponent } from "./loan-list.component";
import { RoleGuard } from "../../auth/index";

export const loanRoutes: Routes = [
    {
        path: "loans",
        children: [
            {
                path: "", component: LoanListComponent, data: {
                    title: "Травмы",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            },
            {
                path: ":id/edit",
                component: LoanEditComponent,
                data: {
                    title: "Редактирование",
                    roles: ["infoStart"]
                },
                canActivate: [RoleGuard]
            }
        ]
    }
];