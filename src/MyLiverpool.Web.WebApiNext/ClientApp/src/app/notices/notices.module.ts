import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { ConfirmationComponent, NoticeComponent, NotifierComponent } from '@notices/components';
import { NotifierService } from '@notices/services';
import { EnsureModuleLoadedOnceGuard } from '@domain/base/ensure-module-loaded-once.guard';


@NgModule({
    declarations: [
        NotifierComponent,
        ConfirmationComponent,
        NoticeComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [
        NotifierComponent
    ],
    entryComponents: [
        NoticeComponent,
        ConfirmationComponent,
    ]
})
export class NoticesModule extends EnsureModuleLoadedOnceGuard {

    static forRoot(): ModuleWithProviders<NoticesModule> {
        return {
            ngModule: NoticesModule,
            providers: [
                NotifierService,
                {
                    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
                    useValue: { duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'center', panelClass: [ 'system-notification-container' ]  }
                }
            ]
        };
    }

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: NoticesModule,
    ) {
        super(parentModule);
    }
}
