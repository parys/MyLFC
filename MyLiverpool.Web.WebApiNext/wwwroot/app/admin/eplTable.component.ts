import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { AdminService } from "./admin.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "epl-table",
    templateUrl: "app/admin/eplTable.component.html"
})

export class EplTableComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    //    this.roles = this.rolesChecked.checkedRoles;

    //    this.service
    //        .updateEplTable()
    //        .subscribe(data => {
                //if true update
    //        },
    //        error => console.log(error),
    //        () => console.log(""));
    }
}