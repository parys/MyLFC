import { Component } from "@angular/core";
import { MdDialogRef } from "@angular/material";

@Component({
    selector: 'materialComment-edit-dialog.component',
    templateUrl: './materialComment-edit-dialog.component.html'
})
export class MaterialCommentEditDialogComponent {
    constructor(public dialogRef: MdDialogRef<MaterialCommentEditDialogComponent>) { }
}