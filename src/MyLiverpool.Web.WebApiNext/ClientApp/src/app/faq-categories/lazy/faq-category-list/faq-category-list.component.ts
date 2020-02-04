import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeleteDialogComponent } from '@shared/index';

import { FaqCategoryService } from '@faq-categories/lazy/faq-category.service';
import { FaqCategory } from '@domain/models';
import { Observable } from 'rxjs';
import { AuthState } from '@auth/store';
import { Select } from '@ngxs/store';


@Component({
    selector: 'faq-category-list',
    templateUrl: './faq-category-list.component.html',
    styleUrls: ['./faq-category-list.component.scss']
})

export class FaqCategoryListComponent implements OnInit {
    public items: FaqCategory[];

    @Select(AuthState.isSiteMember) isSiteMember$: Observable<boolean>;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private faqService: FaqCategoryService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar) {
    }

    public ngOnInit(): void {
        this.update();
    }

    public update(): void {
        this.faqService
            .getAll().subscribe((data: FaqCategory[]) => {
                this.items = data;
            });
    }

    public trackByFn(index: number, item: FaqCategory) {
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
        this.faqService.delete(this.items[index].id)
            .subscribe(result => {
                if (result) {
                    this.snackBar.open('Удалено');
                } else {
                    this.snackBar.open('Ошибка удаления');
                }
            });
    }
}
