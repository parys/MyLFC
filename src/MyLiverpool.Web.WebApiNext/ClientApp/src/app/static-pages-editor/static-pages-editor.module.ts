import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';
import { staticPagesEditorRoutes } from '@static-pages-editor/static-pages-editor.routes';
import { EditorModule } from '@editor/index';
import { PageEditorComponent } from '@static-pages-editor/page-editor';
import { StaticPagesEditorService } from '@static-pages-editor/static-pages-editor.service';

@NgModule({
    imports: [
        SharedModule,
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
