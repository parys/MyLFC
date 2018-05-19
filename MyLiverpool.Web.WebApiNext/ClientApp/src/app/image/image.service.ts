import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Image } from "./image.model";
import { HttpWrapper } from "@app/shared";

@Injectable()
export class ImageService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "image/";
    }

    public get(path: string): Observable<Image[]> {
        return this.http.get<Image[]>(`${this.actionUrl}?path=${path}`);
    };

    public uploadImage(files: File[]): Observable<string[]> {
        let formData: FormData = new FormData();
        for(let i: number =0; i< files.length; i++) {
            formData.append("uploadFile", files[i], files[i].name);
        };
        return this.http.post<string[]>(`${this.actionUrl}`, formData, true);
    };
}