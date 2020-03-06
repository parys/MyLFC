import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { Person } from '@domain/models';
import { SidebarLeftService } from '@lazy-modules/sidebar-left/sidebar-left.service';

@Component({
    selector: 'person-birthday',
    templateUrl: './person-birthday.component.html',
    styleUrls: ['./person-birthday.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonBirthdayComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Person[];
    public currentPersonIndex: number = null;

    constructor(private service: SidebarLeftService,
                private cd: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.sub = this.service.getBirthdays()
            .subscribe((data: Person[]) => this.parse(data),
                null,
                () => {
                    this.cd.markForCheck();
                });
    }

    public ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    public goToPrevious(): void {
        if (this.currentPersonIndex === 0) {
            this.currentPersonIndex = this.items.length - 1;
            this.cd.markForCheck();
        } else {
            this.currentPersonIndex -= 1;
            this.cd.markForCheck();
        }
    }

    public goToNext(): void {
        if (this.items.length === this.currentPersonIndex + 1) {
            this.currentPersonIndex = 0;
            this.cd.markForCheck();
        } else {
            this.currentPersonIndex += 1;
            this.cd.markForCheck();
        }
    }

    private parse(list: Person[]): void {
        this.items = list;
        if (list.length > 0) {
            this.setRandomIndex();
        }
    }

    private setRandomIndex(): void {
        const rand: number = Math.random() * (this.items.length + 1) - 0.5;
        const intNumber: number = Math.round(rand);
        this.currentPersonIndex = intNumber === this.items.length ? intNumber - 1 : intNumber;
    }
}
