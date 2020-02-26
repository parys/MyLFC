import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription, Observable } from 'rxjs';

import { PersonService } from '@persons/person.service';
import { Person } from '@domain/models';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { PersonPageTypeEnum } from '@domain/enums/person-page-type.enum';

@Component({
    selector: 'stuff-list',
    templateUrl: './stuff-list.component.html',
    styleUrls: ['./stuff-list.component.scss'],
})
export class StuffListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public items: Person[];
    public routeLinks: any[];
    public activeLinkIndex = 0;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private personService: PersonService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    public ngOnInit(): void {
        this.routeLinks = [
            { label: 'Первая команда', link: '/persons/stuff/first' },
            { label: 'Академия', link: '/persons/stuff/academy' }];
        if (this.route.snapshot.data.type === PersonPageTypeEnum[PersonPageTypeEnum.First]) {
            this.activeLinkIndex = 0;
        } else {
            this.activeLinkIndex = 1;
        }
        this.updateState();
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public updateState(): void {
        const type = PersonPageTypeEnum[this.activeLinkIndex].toString();
        this.sub = this.personService.getStuff(type).subscribe((data: Person[]) => this.items = data);
    }

    public changeTab(index: any): void {
        this.activeLinkIndex = index;
        this.updateState();
        this.location.go(this.routeLinks[this.activeLinkIndex].link);
    }
}
