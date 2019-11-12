import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'crop-image-field',
    templateUrl: './image-crop-addition.component.html',
    styleUrls: ['./image-crop-addition.component.scss']
})
export class ImageCropFormFieldComponent {
    @Input()
    public controlName = 'crop-image-field';
    @Output()
    public cropped: EventEmitter<string> = new EventEmitter<string>();
    public imageChangedEvent: any = '';
    public croppedImage: any;

    constructor() {}

    public onUploadImage(event: any): void  {
        this.imageChangedEvent = event;
    }

    public imageCropped(image: string): void  {
        this.croppedImage = image;
    }

    public crop(): void {
        this.cropped.emit(this.croppedImage.base64);
    }
}
