import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatNativeDateModule } from '@angular/material';

const materialModules = [
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatNativeDateModule
];

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
