import { Injectable } from "@angular/core";
import { IRoles } from "./roles.interface";
import { StorageService } from "./storage.service";

@Injectable()
export class RolesCheckedService {
    public checked: IRoles = { //todo will be removed
        isLogined: false,
        isEditor: false,
        isNewsmaker: false,
        isModerator: false,
        isMainModerator: false,
        isAdminAssistant: false,
        isAdmin: false,
        isAuthor: false,
        isInformer: false,
        isMainInformer: false,
        isSelf: (userId: number): boolean => this.isSelf(userId)
    };
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

    public checkRoles(): IRoles {
        this.roles = this.storage.getRoles();
        this.checked.isLogined = false;
        this.isLogined = false;
        if (!this.roles) {
            return this.checked;
        };
        this.checked.isLogined = true;
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
        return this.checked;
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
            this.checked.isEditor = true;
            this.isEditor = true;
        }
    }

    private checkNewsmaker(): void {
        if (this.checkRole("NewsStart")) {
            this.checked.isNewsmaker = true;
            this.isNewsmaker = true;
        }
    }

    private checkModerator(): void {
        if (this.checkRole("UserStart")) {
            this.checked.isModerator = true;
            this.isModerator = true;
        }
    }

    private checkMainModerator(): void {
        if (this.checkRole("UserFull")) {
            this.checked.isMainModerator = true;
            this.isMainModerator = true;
        }
    }

    private checkAdminAssistant(): void {
        if (this.checkRole("AdminStart")) {
            this.checked.isAdminAssistant = true;
            this.isAdminAssistant = true;
        }
    }

    private checkAdmin(): void {
        if (this.checkRole("AdminFull")) {
            this.checked.isAdmin = true;
            this.isAdmin = true;
        }
    }

    private checkAuthor(): void {
        if (this.checkRole("BlogStart")) {
            this.checked.isAuthor = true;
            this.isAuthor = true;
        }
    }

    private checkInformer(): void {
        if (this.checkRole("InfoStart")) {
            this.checked.isInformer = true;
            this.isInformer = true;
        }
    }

    private checkMainInformer(): void {
        if (this.checkRole("InfoFull")) {
            this.checked.isMainInformer = true;
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