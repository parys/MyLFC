import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule, BreadcrumbService } from '@shared/index';
import { RecaptchaModule } from '@widgets/recaptcha';
import { WISHES_ROUTE } from '@constants/routes.constants';
import { WISHES_RU } from '@constants/ru.constants';

import { WishListComponent, WishEditComponent } from '@wishes/pages';
import { WishService } from '@wishes/wish.service';
import { wishRoutes } from '@wishes/wish.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(wishRoutes),
        RecaptchaModule,
        MatSelectModule,
        MatInputModule
    ],
    declarations: [
        WishEditComponent,
        WishListComponent
    ],
    providers: [
        WishService
    ]
})
export class WishModule {
    constructor(
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.addFriendlyNameForRouteRegex(`/${WISHES_ROUTE}`, WISHES_RU);
        this.breadcrumbService.hideRouteRegex(`^/${WISHES_ROUTE}/[0-9]+$`);
    }
}
