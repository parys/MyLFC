import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "material-activate-dialog.component",
    templateUrl: "./material-activate-dialog.component.html"
})
export class MaterialActivateDialogComponent {
    constructor(public dialogRef: MatDialogRef<MaterialActivateDialogComponent>) { }
}