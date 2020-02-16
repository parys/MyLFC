import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { MobileLayoutModule } from '@layout/modules/mobile-layout/mobile-layout.module';
import { OdModule } from '../od';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule,
        MatIconModule,
        MobileLayoutModule,
        OdModule
    ],
    declarations: [
        NavbarComponent,
        NavbarMenuComponent,
    ],
    exports: [
        NavbarComponent,
        NavbarMenuComponent,
    ]
})
export class NavbarMenuModule { }
