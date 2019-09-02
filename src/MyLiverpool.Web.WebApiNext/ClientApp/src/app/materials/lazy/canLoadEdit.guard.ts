import { Injectable } from '@angular/core';
import {
    CanLoad,
    Route,
    UrlSegment
} from '@angular/router';

import { Observable } from 'rxjs';

import { LazyLoadingLibraryService } from '@editor/lazyLoadingLibrary.service';

@Injectable()
export class CanLoadEditMaterial implements CanLoad {
    constructor(private lazyLoadService: LazyLoadingLibraryService) {}

    canLoad(route: Route, segments: UrlSegment[])
        : Observable<boolean> | Promise<boolean> | boolean {
        return this.lazyLoadService.loadJs('./scripts.js');
    }
}
