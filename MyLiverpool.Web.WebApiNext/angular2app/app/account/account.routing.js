"use strict";
var index_1 = require("./index");
exports.accountRoutes = [
    { path: "signup", component: index_1.AccountSignupComponent },
    { path: "confirmEmail", component: index_1.ConfirmEmailComponent },
    { path: "forgotPassword", component: index_1.ForgotPasswordComponent },
    { path: "unconfirmedEmail", component: index_1.UnconfirmedEmailComponent },
    { path: "resetPassword", component: index_1.ResetPasswordComponent }
];
//# sourceMappingURL=account.routing.js.map