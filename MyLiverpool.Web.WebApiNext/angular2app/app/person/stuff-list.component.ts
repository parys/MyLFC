import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Person } from "./person.model";
import { PersonService } from "./person.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "<stuff-list>",
    templateUrl: "./stuff-list.component.html"
})
export class StuffListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Person[];
    public roles: IRoles;

    constructor(private personService: PersonService,
        private rolesChecked: RolesCheckedService){
    }

    public ngOnInit(): void {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.personService.getStuff().subscribe(data => this.items = data,
            e => console.log(e));
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
    }
}