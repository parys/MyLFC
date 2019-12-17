import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageService } from '../image.service';

@Component({
    selector: 'image-addition',
    templateUrl: './image-addition.component.html',
    styleUrls: ['./image-addition.component.scss']
})
export class ImageAdditionComponent implements AfterViewInit {
    public uploadedFiles: string[];
    @Input()
    public isMultiple = true;
    @Input()
    public controlName = 'upload-image';

    public buttonName: string;
    @Output()
    public loadedImage: EventEmitter<string> = new EventEmitter<string>();

    constructor(private service: ImageService,
                private snackBar: MatSnackBar
    ) {
    }

    public ngAfterViewInit(): void {
        this.buttonName = `Загрузить изображени${this.isMultiple ? 'я' : 'е'}`;
    }

    public onUploadImage(event: any) {
        if (event.currentTarget.files.length > 0) {
            this.service.uploadImage(event.currentTarget.files)
                .subscribe(result => {
                        if (this.isMultiple) {
                            this.uploadedFiles = result;
                            this.snackBar.open('Изображения загружены', null);
                        } else {
                            this.loadedImage.emit(result[0]);
                            this.snackBar.open('Изображение загружено', null);
                        }
                    },
                    error => {
                        this.snackBar.open('Ошибка при загрузке', null);
                    });
        }
    }
}
