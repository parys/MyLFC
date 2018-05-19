import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "delete-dialog.component",
    templateUrl: "./delete-dialog.component.html"
})
export class DeleteDialogComponent {
    constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) { }
}