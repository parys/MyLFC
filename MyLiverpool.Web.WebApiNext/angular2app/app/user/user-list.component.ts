import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";  
import { FormBuilder, FormGroup } from "@angular/forms";  
import { ActivatedRoute } from "@angular/router";
import { User} from "./user.model";
import { UserService } from "./user.service";
import { RoleGroupService } from "../roleGroup/roleGroup.service";
import { RoleGroup } from "../roleGroup/roleGroup.model";
import { UserFilters } from "./userFilters.model";
import { Pageable, RolesCheckedService, IRoles } from "../shared/index";

@
Component({
    selector: "user-list",
    templateUrl: "./user-list.component.html"
})

export class UserListComponent implements OnInit {
    public items: User[];
    public roles: IRoles;
    public roleGroups: RoleGroup[];
    public filterForm: FormGroup;
    public page: number = 1;
    public itemsPerPage: number = 15;
    public totalItems: number;
    //userName: string;
    public selectedUserId: number;

    constructor(private userService: UserService,
        private location: Location,
        private roleGroupService: RoleGroupService,
        private rolesChecked: RolesCheckedService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.page = +this.route.snapshot.queryParams["page"] || 1;
        let userName = this.route.snapshot.queryParams["userName"] || "";
        let roleGroupId = this.route.snapshot.queryParams["roleGroupId"] || "";
        this.updateRoleGroups();
        this.initFilterForm(userName, roleGroupId);
        this.update();
    }

    public writePm(index: number): void {
        this.selectedUserId = index;
    }

    public closePmWindow(event: any): void {
        this.selectedUserId = null;
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    };

    public update(): void {
        let filters = new UserFilters();
        filters.userName = this.filterForm.get("userName").value;
        filters.roleGroupId = this.filterForm.get("roleGroupId").value;
        filters.page = this.page;

        this.userService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => { this.updateUrl()});
    }

    private updateUrl(): void {
        let newUrl = `users?page=${this.page}`;

        const userName = this.filterForm.get("userName").value;
        if (userName) {
            newUrl = `${newUrl}&userName=${userName}`;
        }
        const roleGroupId = this.filterForm.get("roleGroupId").value;
        if (roleGroupId) {
            newUrl = `${newUrl}&roleGroupId=${roleGroupId}`;
        }

        this.location.replaceState(newUrl);
    }

    private parsePageable(pageable: Pageable<User>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    private updateRoleGroups() {
        this.roleGroupService.getAll().subscribe(data => this.roleGroups = data,
            e => console.log(e));
    }

    private initFilterForm(userName: string, roleGroupId: string) {
        this.filterForm = this.formBuilder.group({
            'roleGroupId': [roleGroupId],
            'userName': [userName]
        });
    }
}