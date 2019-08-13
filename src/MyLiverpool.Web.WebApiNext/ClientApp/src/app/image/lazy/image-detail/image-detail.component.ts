import { Component, Input } from '@angular/core';
import { Image } from '@domain/models';

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent {
    @Input() item: Image;
}
