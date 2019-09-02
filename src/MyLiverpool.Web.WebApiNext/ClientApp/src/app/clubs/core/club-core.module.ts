import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/index';

import { ClubService } from '@clubs/core/club.service';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        ClubService
    ]
})
export class ClubCoreModule { }
