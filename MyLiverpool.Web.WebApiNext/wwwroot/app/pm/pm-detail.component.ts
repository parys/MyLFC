import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";

@Component({
    selector: 'pm-detail',
    templateUrl: 'app/pm/pm-detail.component.html'
})

export class PmDetailComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    item: Pm;

    constructor(private pmService: PmService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.pmService.GetSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error),
                () => console.log("success load edit news"));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private parse(item: Pm): void {
        this.item = item;
    }
}