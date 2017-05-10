import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
    apiUrl: string = "api/v1/";
    serverWithApiUrl = this.apiUrl;

    allowedImageTypes = [".jpeg", ".jpg", ".png", ".gif", ".bmp"];

    debounceTime: number = 600;
    minEmailLength: number = 6;
    minUserNameLength: number = 3;
    maxChatMessageLength: number = 500;
    minPasswordLength: number = 6;
}