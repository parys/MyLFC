import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CropImageFormFieldComponent } from './crop-image-form-field/crop-image-form-field.component';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
    declarations: [CropImageFormFieldComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        ImageCropperModule    ],
    exports: [
        CropImageFormFieldComponent
    ],
    providers: [
    ]
})
export class CropImageFormFieldModule { }
