import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { Image } from "./image.model";              
import { HttpWrapper } from "../shared/httpWrapper";   

@Injectable()
export class ImageService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "image/";
    }

    get = (): Observable<Image[]> => {
        return this.http.get(this.actionUrl).map(res => res.json());
    };  
}