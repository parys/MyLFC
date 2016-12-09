import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { User } from "./user.model";                          
import { UserService } from "./user.service";
import { RolesCheckedService, IRoles } from "../shared/index";
import { RoleGroupService, RoleGroup } from "../roleGroup/index";

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

    constructor(private service: UserService,
        private route: ActivatedRoute,
        private rolesChecked: RolesCheckedService,
        private roleGroupService: RoleGroupService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;
        this.initRoleForm();
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.service.getSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error),
                () => {});
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
        let result = false;
        this.service.updateRoleGroup(this.item.id, roleGroupId)
            .subscribe(data => {
                if (data) {
                    this.roleForm.patchValue(roleGroupId);
                }
            });
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
}