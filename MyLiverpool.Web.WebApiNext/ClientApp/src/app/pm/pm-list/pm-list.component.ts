import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pm } from "@app/+common-models";
import { PmService } from "../pm.service";

@Component({
    selector: "pm-list",
    templateUrl: "./pm-list.component.html"
})

export class PmListComponent implements OnInit {
    public received: Pm[];
    public sent: Pm[];

    constructor(private pmService: PmService,
        private router: Router) {
    }

    public ngOnInit(): void {
        this.pmService
            .getAll()
            .subscribe(data => this.parse(data),
            error => console.log(error));
    }

    private parse(model: any): void {
        this.received = model.received;
        this.sent = model.sent;
    }

    public delete(index: number): void {
        //this.newsCategoryService.Delete(this.items[index].id).subscribe(data => data,
        //    error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
    }

    public writePm(): void {           
        this.router.navigate(["/pms", 0, "edit"]);  
    }
}