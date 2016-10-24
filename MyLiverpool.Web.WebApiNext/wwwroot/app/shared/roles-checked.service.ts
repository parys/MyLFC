﻿import { Injectable } from "@angular/core";
import { IRoles, LocalStorageMine } from "../shared/index";

@Injectable()
export class RolesCheckedService {

    checkedRoles: IRoles = {
        isLogined: false,
        isEditor: false,
        isNewsmaker: false,
        isModerator: false,
        isAdminAssistant: false,
        isSelf: userId => this.isSelf(userId)
    };
    private roles: string[];

    constructor(private localStorage: LocalStorageMine) {
        this.checkRoles();
    }

    checkRoles(): void {
        this.roles = this.localStorage.getObject("roles");
        if (!this.roles) {
            return;
        };
        this.checkedRoles.isLogined = true;
        this.checkEditor();
        this.checkNewsmaker();
        this.checkModerator();
        this.checkAdminAssistant();
    }

    private checkEditor():void {
        if (this.checkRole("NewsFull")) {
            this.checkedRoles.isEditor = true;
        }
    }

    private checkNewsmaker():void {
        if (this.checkRole("NewsStart")) {
            this.checkedRoles.isNewsmaker = true;
        }
    }

    private checkModerator():void {
        if (this.checkRole("UserStart")) {
            this.checkedRoles.isModerator = true;
        }
    }

    private checkAdminAssistant():void {
        if (this.checkRole("AdminStart")) {
            this.checkedRoles.isAdminAssistant = true;
        }
    }

    private checkRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }

    isSelf(authorId: number): boolean {
        let userId = +this.localStorage.get("userId");
        return (userId === authorId);
    }
}