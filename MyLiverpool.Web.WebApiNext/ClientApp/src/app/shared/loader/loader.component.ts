import { Component, OnInit } from "@angular/core";
import { LoaderService } from "./loader.service";
import { LoaderState } from "./loaderState.model";
@Component({
    selector: "http-loader",
    templateUrl: "loader.component.html",
    styleUrls: ["loader.component.css"]
})
export class LoaderComponent implements OnInit {
    public show = false;
    constructor(
        private loaderService: LoaderService
    ) { }

    public ngOnInit() { 
        this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }
}