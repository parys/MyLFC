import { Component, OnInit } from "@angular/core";

@Component({
    selector: "z-list",
    templateUrl: "./z.component.html"
})
export class ZComponent implements OnInit {

    constructor() {
    }

    public ngOnInit(): void {
        console.warn(12342134234321432);
    }

    public pageChanged(event: any): void {

    };

    public update(): void {
        
    }

    public getTypeClass(i: number): string {
        switch (i) {
            case 1:
                return "panel-danger";
            case 2:
                return "panel-success";
            case 3:
                return "panel-info";
            case 4:
                return "panel-primary";
            default:
                return "";
        }
    };
}