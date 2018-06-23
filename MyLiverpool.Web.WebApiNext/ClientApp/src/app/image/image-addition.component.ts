import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Configuration } from "@app/app.constants";
import { ImageService } from "./image.service";

@Component({
    selector: "image-addition",
    templateUrl: "./image-addition.component.html"
})
export class ImageAdditionComponent {
    public uploadedFiles: string[];
    @Input()
    public isMultiple: boolean = true;
    @Input()
    public controlName: string = "upload-image";

    public buttonName: string;
    @Output()
    public loadedImage: EventEmitter<string> = new EventEmitter<string>();

    constructor(private configuration: Configuration,
        private service: ImageService,
        private snackBar: MatSnackBar
    ) { 
    }

    public ngAfterViewInit(): void {
        this.buttonName = this.isMultiple ? "Загрузить изображения" : "Загрузить изображение";
    }

    public onUploadImage(event: any) {
        if (event.currentTarget.files.length > 0) {
            this.service.uploadImage(event.currentTarget.files)
                .subscribe(result => {
                        if (this.isMultiple) {
                            this.uploadedFiles = result;
                            this.snackBar.open("Изображения успешно загружены", null);
                        } else {
                            this.loadedImage.emit(result[0]);
                            this.snackBar.open("Изображение успешно загружено", null);
                        }
                    },
                    error => {
                        console.log(error);
                        this.snackBar.open("Ошибка при загрузке", null);
                    });
        }
    }
}