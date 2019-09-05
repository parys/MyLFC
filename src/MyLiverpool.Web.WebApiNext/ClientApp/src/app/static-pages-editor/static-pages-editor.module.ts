import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/index';
import { staticPagesEditorRoutes } from './static-pages-editor.routes';
import { EditorModule } from '@editor/index';
import { PageEditorComponent } from './page-editor';
import { StaticPagesEditorService } from './static-pages-editor.service';

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
//        private breadcrumbService: BreadcrumbService
    ) {
        // this.breadcrumbService.addFriendlyNameForRouteRegex(`/${USERS_ROUTE}`, USERS_RU);
        // this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${USERS_ROUTE}/[0-9]+$`, USER_RU);
        // this.breadcrumbService.addFriendlyNameForRouteRegex(`^/${USERS_ROUTE}/[0-9]+/settings$`, "Настройки");
    }
}
