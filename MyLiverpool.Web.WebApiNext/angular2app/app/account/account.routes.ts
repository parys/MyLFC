import { Routes } from "@angular/router";
import { UnSignedGuard, RoleGuard } from "../auth/index";
import { AccountSignupComponent } from "./account-signup/index";
import { ConfirmEmailComponent } from "./confirmEmail.component";
import { ForgotPasswordComponent } from "./forgotPassword/index";
import { UnconfirmedEmailComponent } from "./unconfirmedEmail/index";
import { ResetPasswordComponent } from "./resetPassword/index";
import { ChangePasswordComponent } from "./changePassword/index";

export const accountRoutes: Routes = [
    {
        path: "signup",
        component: AccountSignupComponent,
        data: { title: "Регистрация" },
        canActivate: [UnSignedGuard]
    },
    {
        path: "confirmEmail",
        component: ConfirmEmailComponent,
        data: { title: "Подтверждение пароля" }
    },
    {
        path: "forgotPassword",
        component: ForgotPasswordComponent,
        data: { title: "Восстановление забытого пароля" },
        canActivate: [UnSignedGuard]
    },
    {
        path: "unconfirmedEmail",
        component: UnconfirmedEmailComponent,
        data: { title: "Ваша почта не подтверждена" }
    },
    {
        path: "resetPassword",
        component: ResetPasswordComponent,
        data: { title: "Сброс пароля" },
        canActivate: [UnSignedGuard]
    },
    {
        path: "changePassword",
        component: ChangePasswordComponent,
        data: { title: "Изменение пароля" },
        canActivate: [RoleGuard]
    }
];