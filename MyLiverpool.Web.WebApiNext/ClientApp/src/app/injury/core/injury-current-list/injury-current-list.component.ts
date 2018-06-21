import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { InjuryService } from "../injury.service";
import { Injury } from "@app/injury/model";
import { RolesCheckedService } from "@app/shared";

@Component({
    selector: "<injury-current-list>",
    templateUrl: "./injury-current-list.component.html"
})
export class InjuryCurrentListComponent implements OnInit, OnDestroy {
    private sub2: Subscription;
    public items: Injury[];

    constructor(private service: InjuryService,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.update();
    }

    public ngOnDestroy(): void {
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public update(): void {
        this.sub2 = this.service
            .getCurrentAll()
            .subscribe(data => this.items = data,
                e => console.log(e));
    }
}