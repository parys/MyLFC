import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FaqCategory, FaqItem } from '@domain/models';

import { FaqService } from '@faq/faq.service';
import { FaqCategoryService } from '@faq-categories/lazy/faq-category.service';
import { AuthState } from '@auth/store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';


@Component({
    selector: 'faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})

export class FaqComponent extends ObserverComponent implements OnInit {
    public items: FaqCategory[];

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    @Select(AuthState.isSiteMember) isSiteMember$: Observable<boolean>;


    constructor(private service: FaqService,
                private categoryService: FaqCategoryService,
                private notifier: NotifierService,
                private snackBar: MatSnackBar) {
                    super();
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
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.deleteCategory(index);
            }
        });
        this.subscriptions.push(sub$);
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
