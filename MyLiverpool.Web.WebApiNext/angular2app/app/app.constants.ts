import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {                              
    public Server: string = "http://andrewparys-001-site1.itempurl.com/";
    public ApiUrl: string = "api/v1/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}