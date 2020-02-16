import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthState } from '@auth/store';
import { FaqItem } from '@domain/models';

import { FaqItemService } from '../faq-item.service';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';


@Component({
    selector: 'faq-item-list',
    templateUrl: './faq-item-list.component.html',
    styleUrls: ['./faq-item-list.component.scss']
})

export class FaqItemListComponent extends ObserverComponent implements OnInit {
    public items: FaqItem[];

    @Select(AuthState.isSiteMember) isSiteMember$: Observable<boolean>;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private service: FaqItemService,
                private notifier: NotifierService,
                private snackBar: MatSnackBar) {
                    super();
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
        const sub$ = this.notifier.confirm(new ConfirmationMessage({
            title: 'Удалить ?'
        }))
        .subscribe(result => {
            if (result) {
                this.delete(index);
            }
        });
        this.subscriptions.push(sub$);
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
