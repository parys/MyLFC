import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
    server: string = "http://localhost:1669/";
  //  server: string = "http://mylfc.azurewebsites.net/";
  //  server: string = "http://mylfc.ru/";
    apiUrl: string = "api/v1/";
    serverWithApiUrl = this.server + this.apiUrl;

    allowedImageTypes = [".jpeg", ".jpg", ".png", ".gif", ".bmp"];
}