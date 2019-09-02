import { NgModule } from '@angular/core';

import { HttpWrapperModule } from '@base/httpWrapper';
import { BaseRestService } from '@base/infrastructure';

@NgModule({
    imports: [
        HttpWrapperModule
    ],
    providers: [
        BaseRestService
    ]
})
export class InfrastructureModule { }
