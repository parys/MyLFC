"use strict";
var auth_guard_service_1 = require('./auth-guard.service');
var auth_service_1 = require('./auth.service');
var account_signup_component_1 = require("../account/account-signup.component");
exports.authRoutes = [
    { path: 'signup', component: account_signup_component_1.AccountSignupComponent } //todo, canActivate: [AuthGuard]  }
];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService
];
//# sourceMappingURL=auth.routing.js.map