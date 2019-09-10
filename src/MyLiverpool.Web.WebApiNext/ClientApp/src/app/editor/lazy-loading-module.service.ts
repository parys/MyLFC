import { Injectable, SystemJsNgModuleLoader, NgModuleFactory } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class LazyLoadingModuleService {
    private loaded: ReplaySubject<boolean>;
    constructor(private loader: SystemJsNgModuleLoader) {

    }

    public load(): Observable<any> {
        if (this.loaded) {
            return this.loaded.asObservable();
        }
        this.loaded = new ReplaySubject();

        if (this.getTinymce()) {
            this.loaded.next(true);
            this.loaded.complete();
        }
        this.loader.load('src/app/editor/tiny-module/tiny.module#TinyModule')
            .then(() => {
                this.loaded.next(true);
                this.loaded.complete();
            });
        return this.loaded.asObservable();
    }

    public getTinymce = () => {
        const w = typeof window !== 'undefined' ? (window as any) : undefined;
        return w && w.tinymce ? w.tinymce : null;
    }
}
