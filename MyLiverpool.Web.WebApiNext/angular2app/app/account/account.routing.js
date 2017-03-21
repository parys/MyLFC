"use strict";
var index_1 = require("./index");
var index_2 = require("../auth/index");
exports.accountRoutes = [
    {
        path: "signup",
        component: index_1.AccountSignupComponent,
        data: { title: "Регистрация" },
        canActivate: [index_2.UnSignedGuard]
    },
    {
        path: "confirmEmail",
        component: index_1.ConfirmEmailComponent,
        data: { title: "Подтверждение пароля" }
    },
    {
        path: "forgotPassword",
        component: index_1.ForgotPasswordComponent,
        data: { title: "Восстановление забытого пароля" },
        canActivate: [index_2.UnSignedGuard]
    },
    {
        path: "unconfirmedEmail",
        component: index_1.UnconfirmedEmailComponent,
        data: { title: "Ваша почта не подтверждена" }
    },
    {
        path: "resetPassword",
        component: index_1.ResetPasswordComponent,
        data: { title: "Сброс пароля" },
        canActivate: [index_2.UnSignedGuard]
    },
    {
        path: "changePassword",
        component: index_1.ChangePasswordComponent,
        data: { title: "Изменение пароля" },
        canActivate: [index_2.RoleGuard]
    }
];
//# sourceMappingURL=account.routing.js.map