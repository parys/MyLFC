import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

@Injectable()
export class RolesCheckedService {
    public isLogined: boolean = false;
    public isEditor: boolean =  false;
    public isNewsmaker: boolean =  false;
    public isModerator: boolean =  false;
    public isMainModerator: boolean =  false;
    public isAdminAssistant: boolean =  false;
    public isAdmin: boolean =  false;
    public isAuthor: boolean =  false;
    public isInformer: boolean =  false;
    public isMainInformer: boolean =  false;

    private roles: string[];

    constructor(
        private storage: StorageService) {
        this.checkRoles();
    }

    public checkRoles(): void {
        this.roles = this.storage.getRoles();
        this.isLogined = false;
        if (!this.roles) {
            return;
        };
        this.isLogined = true;
        this.checkEditor();
        this.checkNewsmaker();
        this.checkModerator();
        this.checkMainModerator();
        this.checkAdminAssistant();
        this.checkAdmin();
        this.checkAuthor();
        this.checkInformer();
        this.checkMainInformer();
    }

    public isUserInRole(role: string): boolean {
        return this.checkRole(role);
    }

    public isSelf(authorId: number): boolean {
        const userId: number = this.storage.getUserId();
        return (userId === authorId);
    }

    private checkEditor(): void {
        if (this.checkRole("NewsFull") || this.checkRole("BlogFull")) {
            this.isEditor = true;
        }
    }

    private checkNewsmaker(): void {
        if (this.checkRole("NewsStart")) {
            this.isNewsmaker = true;
        }
    }

    private checkModerator(): void {
        if (this.checkRole("UserStart")) {
            this.isModerator = true;
        }
    }

    private checkMainModerator(): void {
        if (this.checkRole("UserFull")) {
            this.isMainModerator = true;
        }
    }

    private checkAdminAssistant(): void {
        if (this.checkRole("AdminStart")) {
            this.isAdminAssistant = true;
        }
    }

    private checkAdmin(): void {
        if (this.checkRole("AdminFull")) {
            this.isAdmin = true;
        }
    }

    private checkAuthor(): void {
        if (this.checkRole("BlogStart")) {
            this.isAuthor = true;
        }
    }

    private checkInformer(): void {
        if (this.checkRole("InfoStart")) {
            this.isInformer = true;
        }
    }

    private checkMainInformer(): void {
        if (this.checkRole("InfoFull")) {
            this.isMainInformer = true;
        }
    }

    private checkRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }
}