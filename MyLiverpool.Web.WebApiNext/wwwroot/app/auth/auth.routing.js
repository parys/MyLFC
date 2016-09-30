"use strict";
var index_1 = require("./index");
var account_signup_component_1 = require("../account/account-signup.component");
exports.authRoutes = [
    { path: "signup", component: account_signup_component_1.AccountSignupComponent } // todo, canActivate: [AuthGuard]  }
];
exports.authProviders = [
    index_1.AuthGuard,
    index_1.AuthService
];
//# sourceMappingURL=auth.routing.js.map