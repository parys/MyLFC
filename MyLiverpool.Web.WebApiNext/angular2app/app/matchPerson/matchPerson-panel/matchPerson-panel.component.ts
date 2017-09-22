import { Component, OnInit, Input } from "@angular/core";
import { Configuration } from "../../app.constants";
import { MatchPersonService } from "../matchPerson.service";
import { MatchPerson } from "../matchPerson.model";
import { RolesCheckedService } from "../../shared/index";

@Component({
    selector: "matchPerson-panel",
    templateUrl: "./matchPerson-panel.component.html"
})
export class MatchPersonPanelComponent implements OnInit {
    @Input() public matchId: number;
    @Input() public isHome: boolean;
    public isEdit: boolean = false;
    public matchPersons: MatchPerson[];
    public selectedMatchPerson: MatchPerson;
    public selectedIndex: number;

    constructor(private matchPersonService: MatchPersonService,
        private config: Configuration,
        private roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.matchPersonService.getForMatch(this.matchId)
            .subscribe(data => this.matchPersons = data,
            e => console.log(e));
    }

    public addMatchPerson(): void {
        this.isEdit = true;
    }

    public cancelMatchPersonEdit(): void {
        this.selectedMatchPerson = null;
        this.isEdit = false;
        this.selectedIndex = null;
    }

    public updateMatchPerson(person: MatchPerson) {
        if (this.selectedIndex) {
            this.matchPersons[this.selectedIndex] = person;
        } else {
            this.matchPersons.push(person);
        }

        this.cancelMatchPersonEdit();
    }

    public selectMatchPerson(index: number): void {
        this.selectedMatchPerson = this.matchPersons[index];
        this.selectedIndex = index;
        this.isEdit = true;
    }
}