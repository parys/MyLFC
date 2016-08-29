"use strict";
const auth_guard_service_1 = require('./auth-guard.service');
const auth_service_1 = require('./auth.service');
//import { LoginComponent } from './login.component';
exports.authRoutes = [];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService
];
//# sourceMappingURL=auth.routing.js.map