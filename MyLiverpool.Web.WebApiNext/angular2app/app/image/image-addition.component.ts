import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Configuration } from "@app/app.constants";
import { ImageService } from "./image.service";

@Component({
    selector: "image-addition",
    templateUrl: "./image-addition.component.html"
})
export class ImageAdditionComponent implements OnInit, OnDestroy {
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

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void { }

    public ngAfterViewInit(): void {
        this.buttonName = this.isMultiple ? "Загрузить изображения" : "Загрузить изображение";
    }

    public onUploadImage(event: any) {
        if (event.currentTarget.files.length > 0) {
            this.service.uploadImage(event.currentTarget.files)
                .subscribe(result => {
                        if (this.isMultiple) {
                            this.uploadedFiles = result;
                            this.snackBar.open("Изображения успешно загружены", null, { duration: 5000 });
                        } else {
                            this.loadedImage.emit(result[0]);
                            this.snackBar.open("Изображение успешно загружено", null, { duration: 5000 });
                        }
                    },
                    error => {
                        console.log(error);
                        this.snackBar.open("Ошибка при загрузке", null, { duration: 5000 });
                    });
        }
    }
}