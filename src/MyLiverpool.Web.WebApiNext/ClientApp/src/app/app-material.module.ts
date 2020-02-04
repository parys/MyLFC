import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule, // todo research whether it needs here
    MatButtonModule];

@NgModule({
    imports: [
        CommonModule,
        ...materialModules
    ],
    exports: [
        ...materialModules
    ]
})
export class AppMaterialModule {
}
