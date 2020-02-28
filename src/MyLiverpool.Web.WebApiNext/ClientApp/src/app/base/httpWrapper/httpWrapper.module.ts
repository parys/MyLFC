import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpWrapper } from '@base/httpWrapper/httpWrapper.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        HttpWrapper,
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ]
})
export class HttpWrapperModule { }
