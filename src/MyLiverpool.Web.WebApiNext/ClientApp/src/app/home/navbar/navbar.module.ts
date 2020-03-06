import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar.component';
import { MobileLayoutModule } from '@layout/modules/mobile-layout/mobile-layout.module';
import { OdModule } from '@od/od.module';
import { MatButtonModule } from '@angular/material/button';
import { DynamicContentOutletModule } from '@layout/dynamic-content-outlet/dynamic-content-outlet.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MobileLayoutModule,
        DynamicContentOutletModule,
        OdModule
    ],
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule { }
