import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Configuration } from "../app.constants";
import { User } from "./user.model";                          
import { UserService } from "./user.service";
import { RolesCheckedService, IRoles, LocalStorageService } from "../shared/index";
import { RoleGroupService, RoleGroup } from "../roleGroup/index";
import { GlobalValidators } from "../shared/index";  

@Component({
    selector: "user-detail",
    template: require("./user-detail.component.html")
})

export class UserDetailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    item: User;
    roles: IRoles;
    roleGroups: RoleGroup[];
    roleForm: FormGroup;
    banForm: FormGroup;
    selectedUserId: number;
    banDaysCount: number = 0;              

    constructor(private configuration: Configuration,
        private storage: LocalStorageService,
        private service: UserService,
        private route: ActivatedRoute,
        private rolesChecked: RolesCheckedService,
        private roleGroupService: RoleGroupService,
        private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.initRoleForm();
        this.initBanForm();
        this.sub = this.route.params.subscribe(params => {
            if (+params["id"]) {
                this.service.getSingle(+params["id"])
                    .subscribe(data => this.parse(data),
                        error => console.log(error),
                        () => {});
            } else {
                this.router.navigate(["/user/list/1"]);
            }
        });
        if (this.roles.isAdminAssistant) {
            this.loadRoleGroups();
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(): void {
        let roleGroupId = this.roleForm.controls["roleGroupId"].value;
        this.service.updateRoleGroup(this.item.id, roleGroupId)
            .subscribe(data => {
                if (data) {
                    this.roleForm.patchValue(roleGroupId);
                }
            });
    }

    onSubmitBan(): void {
        let banDaysCount = this.banForm.controls["banDaysCount"].value;
        this.service.ban(this.item.id, banDaysCount)
            .subscribe(data => {
                if (data) {
                    let time = new Date();
                    this.item.lockoutEnd = new Date(time.setHours(time.getHours() + banDaysCount * 24 * 60 * 60));
                    this.banForm.controls["banDaysCount"].patchValue(null);
                }
            });
    }

    onChangeAvatar(event: any) {
        let file = event.srcElement.files[0];
        if (file) {
            this.service.updateAvatar(file)
                .subscribe(result => this.item.photo = `${result}#${Math.random()}`,
                    error => console.log(error),
                    () => {});
        }
    }

    resetAvatar(): void {
        this.service.resetAvatar(this.item.id)
            .subscribe(result => this.item.photo = `${result}#${Math.random()}`,
            error => console.log(error),
            () => {});
    }

    unban(): void {
        this.service.unban(this.item.id)
            .subscribe(data => {
                if (data) {               
                    this.item.lockoutEnd = null;                            
                }
            });
    }

    writePm(): void {
        this.selectedUserId = this.item.id;
    }

    closePmWindow(event: any): void {
        this.selectedUserId = null;
    }

    private parse(item: User): void {
        this.item = item;
        this.roleForm.patchValue(item);
    }

    private loadRoleGroups() {
        this.roleGroupService.getAll()
            .subscribe(data => this.roleGroups = data,
                error => console.log(error),
                () => {});
    }

    private initRoleForm() {
        this.roleForm = this.formBuilder.group({
            'roleGroupId': [
                "", Validators.compose([
                    Validators.required
                ])
            ]
        });
    }

    private initBanForm() {
        this.banForm = this.formBuilder.group({
            'banDaysCount': [
                "", Validators.compose([
                    Validators.required,
                    GlobalValidators.mustBeGreaterThanZero
                ])
            ]
        });
    }
}