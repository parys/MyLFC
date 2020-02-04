import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthState } from '@auth/store';
import { DeleteDialogComponent } from '@shared/index';
import { FaqItem } from '@domain/models';

import { FaqItemService } from '../faq-item.service';


@Component({
    selector: 'faq-item-list',
    templateUrl: './faq-item-list.component.html',
    styleUrls: ['./faq-item-list.component.scss']
})

export class FaqItemListComponent implements OnInit {
    public items: FaqItem[];

    @Select(AuthState.isSiteMember) isSiteMember$: Observable<boolean>;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private service: FaqItemService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
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
