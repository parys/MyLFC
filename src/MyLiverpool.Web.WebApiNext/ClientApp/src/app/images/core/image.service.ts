import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Image } from '@domain/models';
import { HttpWrapper } from '@base/httpWrapper';
import { IMAGES_ROUTE } from '@constants/routes.constants';

@Injectable()
export class ImageService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = IMAGES_ROUTE + '/';
    }

    public get(path: string): Observable<Image[]> {
        return this.http.get<Image[]>(`${this.actionUrl}?path=${path}`);
    }

    public uploadImage(files: File[]): Observable<string[]> {
        const formData: FormData = new FormData();
        for (const file of files) {
            formData.append('uploadFile', file, file.name);
        }
        return this.http.post<string[]>(`${this.actionUrl}`, formData, true);
    }

    public uploadBase64Image(imageString: string): Observable<string> {
        return this.http.post<string>(`${this.actionUrl}base64`, JSON.stringify(imageString));
    }
}
