import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomTitleMetaService } from '@core/services';
import { PersonService } from '@persons/person.service';
import { Person } from '@domain/models';

@Component({
    selector: 'person-detail',
    templateUrl: './person-detail.component.html',
    //    styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit, OnDestroy {
    private sub2: Subscription;
    public item: Person;

    constructor(private router: Router,
                private personService: PersonService,
                private title: CustomTitleMetaService,
                @Inject(PLATFORM_ID) private platformId: object,
                private route: ActivatedRoute) {
                this.sub2 = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
        //        this.init();
            }
        });
    }

    public ngOnInit(): void {
   //     this.init();
    }

    public ngOnDestroy(): void {
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

//     private init(): void {

// }

}
