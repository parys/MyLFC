import { Component } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { SquadList } from "./squad-list.model";
import { PersonService } from "./person.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "<squad>",
    templateUrl: "./squad.component.html"
})
export class SquadComponent {
    private sub: Subscription;
    public item: SquadList;
    public roles: IRoles;

    constructor(private personService: PersonService,
        private rolesChecked: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.personService.getSquad().subscribe(data => this.item = data,
            e => console.log(e));
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}