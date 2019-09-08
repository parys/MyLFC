import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { StaticPagesModule } from '@static-pages/static-pages.module';

const materialModules = [
    MatExpansionModule
];

@NgModule({
    imports: [
        CommonModule,
        ...materialModules,
        StaticPagesModule
    ],
    exports: [
        ...materialModules
    ]
})
export class WalMaterialModule {
}
