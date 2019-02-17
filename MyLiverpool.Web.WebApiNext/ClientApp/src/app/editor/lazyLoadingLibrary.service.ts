import { Injectable, Inject } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { DOCUMENT } from "@angular/common";

//todo maybe for serverside need to workaround
@Injectable()
export class LazyLoadingLibraryService {
    private loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

    constructor( @Inject(DOCUMENT) private readonly document: any) { }

    public loadJs(url: string): Observable<any> {
        if (this.loadedLibraries[url]) {
            return this.loadedLibraries[url].asObservable();
        }
        
        this.loadedLibraries[url] = new ReplaySubject();

        const script = this.document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = () => {
            this.loadedLibraries[url].next("");
            this.loadedLibraries[url].complete();
        };

        this.document.body.appendChild(script);
        return this.loadedLibraries[url].asObservable();
    }
}