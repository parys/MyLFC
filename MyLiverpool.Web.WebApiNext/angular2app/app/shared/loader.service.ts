import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ILoaderState } from "./ILoaderState.model";

@Injectable()
export class LoaderService {
    private loaderSubject = new Subject<ILoaderState>();
    public loaderState = this.loaderSubject.asObservable();

    public show() {
        this.loaderSubject.next(<ILoaderState>{show: true});
    }
    public hide() {
        this.loaderSubject.next(<ILoaderState>{show: false});
    }
}