import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RolesCheckedService } from '@app/+auth';
import { DeleteDialogComponent } from '@app/shared';
import { FaqItem } from '@domain/models';

import { FaqItemService } from '../faq-item.service';


@Component({
    selector: 'faq-item-list',
    templateUrl: './faq-item-list.component.html',
    styleUrls: ['./faq-item-list.component.scss']
})

export class FaqItemListComponent implements OnInit {
    public items: FaqItem[];


    constructor(private service: FaqItemService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.update();
    }

    public update(): void {
        this.service
            .getAll().subscribe((data: FaqItem[]) => {
                this.items = data;
            });
    }

    public trackByFn(index: number, item: FaqItem) {
        if (!item) { return null; }
        return item.id;
    }

    public showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
    }

    private delete(index: number): void {
        this.service.delete(this.items[index].id)
            .subscribe(result => {
                if (result) {
                    this.snackBar.open('Удалено');
                } else {
                    this.snackBar.open('Ошибка удаления');
                }
            });
    }
}
