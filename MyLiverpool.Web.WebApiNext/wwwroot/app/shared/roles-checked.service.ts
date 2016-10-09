import { Injectable } from "@angular/core";
import { IRoles, LocalStorageMine } from "../shared/index";

@Injectable()
export class RolesCheckedService {

    checkedRoles: IRoles = {
        isEditor: false,
        isNewsmaker: false
    };
    private roles: string[];

    constructor(private localStorage: LocalStorageMine) {
        this.checkRoles();
    }

    checkRoles(): void {
        console.log("CHECK");
        this.roles = this.localStorage.getObject("roles");
        if (!this.roles) {
            return;
        };
        this.checkEditor();
        this.checkNewsmaker();
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

    private checkRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }
}