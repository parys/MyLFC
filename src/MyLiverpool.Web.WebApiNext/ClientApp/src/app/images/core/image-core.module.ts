import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';

import { SharedModule } from '@shared/index';
import { ImageService } from './image.service';
import { ImageAdditionComponent } from './image-addition';
import { ImageCropAdditionComponent } from './image-crop-addition';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        SharedModule,
        ImageCropperModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        ImageAdditionComponent,
        ImageCropAdditionComponent
    ],
    exports: [
        ImageAdditionComponent,
        ImageCropAdditionComponent
    ],
    providers: [
        ImageService
    ]
})
export class ImageCoreModule { }
