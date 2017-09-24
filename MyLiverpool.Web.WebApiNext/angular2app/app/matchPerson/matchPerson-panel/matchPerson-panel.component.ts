import { Component, OnInit, Input } from "@angular/core";
import { MatchPersonService } from "../matchPerson.service";
import { MatchPerson } from "../matchPerson.model";
import { RolesCheckedService } from "../../shared/index";

@Component({
    selector: "matchPerson-panel",
    templateUrl: "./matchPerson-panel.component.html"
})
export class MatchPersonPanelComponent implements OnInit {
    private matchPersons: MatchPerson[];
    @Input() public matchId: number;
    @Input() public isHome: boolean;
    public isEdit: boolean = false;
    public selectedMatchPerson: MatchPerson;
    public selectedIndex: number;
    public homeTeam: MatchPerson[];
    public homeBench: MatchPerson[];
    public homeCoach: MatchPerson;
    public awayTeam: MatchPerson[];
    public awayBench: MatchPerson[];
    public awayCoach: MatchPerson;
    public mainRef: MatchPerson;

    constructor(private matchPersonService: MatchPersonService,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.matchPersonService.getForMatch(this.matchId)
            .subscribe(data => this.parsePersons(data),
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
            this.selectedMatchPerson = person;
        } else {
            this.matchPersons.push(person);
        }

        this.cancelMatchPersonEdit();
        this.parsePersons(this.matchPersons);
    }

    public selectMatchPerson(person: MatchPerson): void {
        this.selectedMatchPerson = person;
        this.selectedIndex = this.matchPersons.indexOf(person);
        this.isEdit = true;
    }

    private parsePersons(persons: MatchPerson[]): void {
        this.homeCoach = persons.filter(x => x.personType === (this.isHome ? 5 : 6))[0];
        this.awayCoach = persons.filter(x => x.personType === (this.isHome ? 6 : 5))[0];
        this.homeTeam = persons.filter(x => x.personType === (this.isHome ? 1 : 3));
        this.awayTeam = persons.filter(x => x.personType === (this.isHome ? 3 : 1));
        this.homeBench = persons.filter(x => x.personType === (this.isHome ? 2 : 4));
        this.awayBench = persons.filter(x => x.personType === (this.isHome ? 4 : 2));
        this.awayBench = persons.filter(x => x.personType === (this.isHome ? 4 : 2));
        this.mainRef = persons.filter(x => x.personType === 7)[0];
    }
}