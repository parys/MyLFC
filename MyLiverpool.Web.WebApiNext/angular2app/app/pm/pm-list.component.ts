import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Pm } from "./pm.model";
import { PmService } from "./pm.service";

@Component({
    selector: "pm-list",
    template: require("./pm-list.component.html")
})

export class PmListComponent implements OnInit {

    received: Pm[];
    sent: Pm[];

    constructor(private pmService: PmService, private router: Router) {
    }

    ngOnInit() {
        this.pmService
            .GetAll()
            .subscribe(data => this.parse(data),
            error => console.log(error),
            () => {});
    }

    private parse(model: any): void {
        console.log(model);
        this.received = model.received;
        this.sent = model.sent;
    }

    delete(index: number) {
        //console.log("delete");
        //this.newsCategoryService.Delete(this.items[index].id).subscribe(data => data,
        //    error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
    }

    writePm() {           
        this.router.navigate(["/pm", 0, "edit"]);  
    }
}