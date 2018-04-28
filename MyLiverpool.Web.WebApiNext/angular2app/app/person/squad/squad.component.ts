import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { SquadList } from "../squad-list.model";
import { PersonService } from "../person.service";
import { PersonTypeEnum } from "../personType.enum";
import { RolesCheckedService } from "@app/shared";

@Component({
    selector: "<squad>",
    templateUrl: "./squad.component.html"
})
export class SquadComponent {
    private sub: Subscription;
    public item: SquadList;
    public routeLinks: any[];
    public activeLinkIndex: number = 0;

    constructor(private personService: PersonService,
        private route: ActivatedRoute,
        public roles: RolesCheckedService) {

    }

    public ngOnInit(): void {
        this.routeLinks = [
            { label: "Первая команда", link: "/squad/first" },
            { label: "Академия", link: "/squad/academy" },
            { label: "В аренде", link: "/squad/loan" }];
        if (this.route.snapshot.data["type"] === PersonTypeEnum[PersonTypeEnum.First]) {
            this.activeLinkIndex = 0;
        } else if (this.route.snapshot.data["type"] === PersonTypeEnum[PersonTypeEnum.Academy]) {
            this.activeLinkIndex = 1;
        } else {
            this.activeLinkIndex = 2;
        }
        this.updateState(PersonTypeEnum[this.activeLinkIndex].toString());
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public updateState(type: string): void {
        this.sub = this.personService.getSquad(type).subscribe(data => this.item = data,
            e => console.log(e));
    }
}