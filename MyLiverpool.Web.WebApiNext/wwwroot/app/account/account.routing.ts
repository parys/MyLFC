import { Routes } from "@angular/router";
import { AccountSignupComponent, ConfirmEmailComponent } from "./index";

export const accountRoutes: Routes = [
    { path: "signup", component: AccountSignupComponent }, // todo, canActivate: [AuthGuard]  }
    { path: "confirmEmail/:id/:code", component: ConfirmEmailComponent }
];