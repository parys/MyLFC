import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { InjuryService } from "./injury.service";
import { Injury } from "./injury.model";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "<injury-current-list>",
    templateUrl: "./injury-current-list.component.html"
})
export class InjuryCurrentListComponent implements OnInit, OnDestroy {
    private sub2: Subscription;
    public roles: IRoles;
    public items: Injury[];

    constructor(private service: InjuryService,
        private rolesChecked: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.update();
    }

    public ngOnDestroy(): void {
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public update(): void {
        this.sub2 = this.service
            .getCurrentAll()
            .subscribe(data => this.items = data,
                error => console.log(error));
    }
}