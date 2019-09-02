import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpWrapper } from '@base/httpWrapper/httpWrapper.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        HttpWrapper
    ]
})
export class HttpWrapperModule { }
