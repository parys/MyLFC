import { Routes } from '@angular/router';

import { FAQ_RU } from '@app/+constants';

import { FaqComponent } from './faq';

export const faqItemRoutes: Routes = [
    { path: '', component: FaqComponent, data: { title: FAQ_RU } }
];
