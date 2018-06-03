import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";  
import { FormBuilder, FormGroup } from "@angular/forms";  
import { ActivatedRoute } from "@angular/router";
import { User} from "../user.model";
import { UserService } from "../+core";
import { RoleGroup, RoleGroupService } from "@app/roleGroup";
import { Pageable, RolesCheckedService } from "@app/shared";

@Component({
    selector: "user-list",
    templateUrl: "./user-list.component.html"
})

export class UserListComponent implements OnInit {
    public items: User[];
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
        public roles: RolesCheckedService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.page = +this.route.snapshot.queryParams["page"] || 1;
        let userName = this.route.snapshot.queryParams["userName"] || "";
        let roleGroupId = this.route.snapshot.queryParams["roleGroupId"] || "";
        let itemsPerPage = this.route.snapshot.queryParams["itemsPerPage"] || 15;
        this.updateRoleGroups();
        this.initFilterForm(userName, roleGroupId, itemsPerPage);
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
        const filters = this.filterForm.value;
        filters.page = this.page;

        this.userService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
            e => console.log(e),
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

    private initFilterForm(userName: string, roleGroupId: string, itemsPerPage: number) {
        this.filterForm = this.formBuilder.group({
            roleGroupId: [roleGroupId],
            userName: [userName],
            itemsPerPage: [itemsPerPage]
        });
    }
}