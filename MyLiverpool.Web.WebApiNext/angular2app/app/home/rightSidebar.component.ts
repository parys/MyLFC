import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { AdminService } from "../admin/admin.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "right-sidebar",
    template: require("./rightSidebar.component.html")
})
export class RightSidebarComponent  {
    roles: IRoles;
    eplTable: string;


}