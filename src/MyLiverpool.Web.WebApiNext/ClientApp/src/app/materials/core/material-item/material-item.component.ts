import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Material } from '@domain/models';
import { RolesCheckedService } from '@base/auth';
import { MaterialActivateDialogComponent } from '../material-activate-dialog';
import { DeleteDialogComponent } from '@shared/index';
import { MaterialService } from '../material.service';

@Component({
    selector: 'material-item',
    templateUrl: './material-item.component.html',
    styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent {
    @Input()
    public item: Material;

    constructor(
        private dialog: MatDialog,
        public roles: RolesCheckedService,
        private materialService: MaterialService,
        private cd: ChangeDetectorRef,
        private snackBar: MatSnackBar) {}

    public showActivateModal(): void {
        const dialogRef = this.dialog.open(MaterialActivateDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.activate();
            }
        });
    }

    public showDeleteModal(): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete();
            }
        });
    }

    private activate(): void {
        this.materialService.activate(this.item.id)
            .subscribe(res => {
                    if (res) {
                        this.item.pending = false;
                        this.snackBar.open('Материал активирован');
                    } else {
                        this.snackBar.open('Материал НЕ активирован');
                    }
                },
                null,
                () => this.cd.markForCheck());
    }

    private delete(): void {
        this.materialService.delete(this.item.id)
            .subscribe(res => {
                    if (res) {
                        this.item = null;
                    } else {
                        this.snackBar.open('Ошибка удаления');
                    }
                },
                null,
                () => this.cd.markForCheck());
    }

}
