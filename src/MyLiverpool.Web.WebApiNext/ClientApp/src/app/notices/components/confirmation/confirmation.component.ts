import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmationMessage } from '@notices/shared';


@Component({
    selector: 'confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent {

    constructor(
        public dialogRef: MatDialogRef<ConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationMessage,
    ) {
        this.dialogRef.addPanelClass('confirmation-panel-dialog');
    }

}
