import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RolesCheckedService } from '@app/+auth';
import { DeleteDialogComponent } from '@app/shared';
import { FaqCategory } from '@domain/models';

import { FaqService } from '../faq.service';
import { FaqCategoryService } from '@faq-categories/lazy/faq-category.service';


@Component({
    selector: 'faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})

export class FaqComponent implements OnInit {
    public items: FaqCategory[];


    constructor(private service: FaqService,
        private categoryService: FaqCategoryService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        public roles: RolesCheckedService) {
    }

    public ngOnInit(): void {
        this.update();
    }

    public update(): void {
        this.service
            .get().subscribe((data: FaqCategory[]) => {
                this.items = data;
            });
    }

    public trackByFn(index: number, item: FaqCategory) {
        console.log(1);
        if (!item) { return null; }
        console.log(2);
        return item.id;
    }

    public showDeleteCategoryModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
    }

    private delete(index: number): void {
        this.categoryService.delete(this.items[index].id)
            .subscribe(result => {
                if (result) {
                    this.snackBar.open('Удалено');
                } else {
                    this.snackBar.open('Ошибка удаления');
                }
            });
    }
}
