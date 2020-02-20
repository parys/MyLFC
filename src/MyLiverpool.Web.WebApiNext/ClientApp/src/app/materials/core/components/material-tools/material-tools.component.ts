import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ObserverComponent } from '@domain/base';
import { NotifierService } from '@notices/services';
import { ConfirmationMessage } from '@notices/shared';
import { Material } from '@domain/models';

@Component({
    selector: 'material-tools',
    templateUrl: './material-tools.component.html',
    styleUrls: ['./material-tools.component.scss']
})
export class MaterialToolsComponent extends ObserverComponent {

    @Input() material: Material;

    @Input() editor: boolean;

    @Input() editLink: string;

    @Output() activate = new EventEmitter();

    @Output() delete = new EventEmitter();

    constructor(private notifierService: NotifierService) {
            super();
        }

    public onShowActivateModal(): void {
        const sub$ = this.notifierService.confirm(new ConfirmationMessage({ title: 'Активировать материал?' }))
            .subscribe(result => {
                if (!result) {
                    return;
                }

                this.activate.emit();
            });
        this.subscriptions.push(sub$);
    }

    public onShowDeleteModal(): void {
        const sub$ = this.notifierService.confirm(new ConfirmationMessage({ title: 'Удалить материал?' }))
        .subscribe(result => {
            if (!result) {
                return;
            }

            this.delete.emit();
        });
        this.subscriptions.push(sub$);
    }
}
