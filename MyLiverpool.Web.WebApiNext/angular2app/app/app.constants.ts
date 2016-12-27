import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
    server: string = "http://localhost:1669/";
  //  server: string = "http://andrewparys-001-site1.itempurl.com/";
    apiUrl: string = "api/v1/";
    serverWithApiUrl = this.server + this.apiUrl;

    allowedImageTypes = [".jpeg", ".jpg", ".png", ".gif", ".bmp"];
}