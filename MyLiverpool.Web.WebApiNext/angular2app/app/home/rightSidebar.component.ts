import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { AdminService } from "../admin/admin.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "right-sidebar",
    template: require("./rightSidebar.component.html")
})
export class RightSidebarComponent implements OnInit {
    roles: IRoles;
    eplTable: string;

    constructor(private service: AdminService,
        private rolesChecked: RolesCheckedService) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.service
            .getEplTable()
            .subscribe(data => this.eplTable = data,
            error => console.log(error));
    }

    updateEplTable() {
        this.service
            .updateEplTable()
            .subscribe(data => this.eplTable = data,
            error => console.log(error));
    }
}