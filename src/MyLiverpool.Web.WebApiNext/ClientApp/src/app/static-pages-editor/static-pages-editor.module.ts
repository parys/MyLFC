import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@editor/index';

import { staticPagesEditorRoutes } from '@static-pages-editor/static-pages-editor.routes';
import { PageEditorComponent } from '@static-pages-editor/page-editor';
import { StaticPagesEditorService } from '@static-pages-editor/static-pages-editor.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(staticPagesEditorRoutes),
        EditorModule
    ],
    declarations: [
        PageEditorComponent
    ],
    providers: [
        StaticPagesEditorService
    ]
})
export class StaticPagesEditorModule {
    constructor(
    ) {
    }
}
