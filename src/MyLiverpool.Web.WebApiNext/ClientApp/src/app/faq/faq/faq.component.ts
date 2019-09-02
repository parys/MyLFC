import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RolesCheckedService } from '@base/auth';
import { DeleteDialogComponent } from '@shared/index';
import { FaqCategory, FaqItem } from '@domain/models';

import { FaqService } from '@faq/faq.service';
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
        if (!item) { return null; }
        return item.id;
    }

    public trackByItemFn(index: number, item: FaqItem) {
        if (!item) { return null; }
        return item.id;
    }

    public showDeleteCategoryModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deleteCategory(index);
            }
        });
    }

    private deleteCategory(index: number): void {
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
