import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs';

import { PersonService } from '@persons/person.service';
import { SquadList } from '@domain/models';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';
import { PersonPageTypeEnum } from '@domain/enums/person-page-type.enum';

@Component({
    selector: 'squad',
    templateUrl: './squad.component.html',
    styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public item: SquadList;
    public routeLinks: any[];
    public activeLinkIndex = 0;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    constructor(private personService: PersonService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    public ngOnInit(): void {
        this.routeLinks = [
            { label: 'Первая команда', link: '/persons/squad/first' },
            { label: 'Академия', link: '/persons/squad/academy' },
            { label: 'В аренде', link: '/persons/squad/loan' }];
        if (this.route.snapshot.data.type === PersonPageTypeEnum[PersonPageTypeEnum.First]) {
            this.activeLinkIndex = 0;
        } else if (this.route.snapshot.data.type === PersonPageTypeEnum[PersonPageTypeEnum.Academy]) {
            this.activeLinkIndex = 1;
        } else {
            this.activeLinkIndex = 2;
        }
        this.updateState();
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public updateState(): void {
        const type = PersonPageTypeEnum[this.activeLinkIndex].toString();
        this.sub = this.personService
            .getSquad(type)
            .subscribe((data: SquadList) => this.item = data);
    }

    public changeTab(index: any): void {
        this.activeLinkIndex = index;
        this.updateState();
        this.location.go(this.routeLinks[this.activeLinkIndex].link);
    }
}
