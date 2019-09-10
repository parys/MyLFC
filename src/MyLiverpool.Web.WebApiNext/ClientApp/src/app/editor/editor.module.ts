import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorComponent } from './editor.component';

import { LazyLoadingModuleService } from './lazy-loading-module.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EditorComponent
    ],
    exports: [
        EditorComponent
    ],
    providers: [
        SystemJsNgModuleLoader,
        LazyLoadingModuleService
    ]
})
export class EditorModule { }
