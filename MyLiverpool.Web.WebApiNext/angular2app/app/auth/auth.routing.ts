import { Routes } from "@angular/router";
import { RoleGuard, AuthService } from "./index";

export const authRoutes: Routes = [];
export const authProviders = [
    RoleGuard,
    AuthService
];