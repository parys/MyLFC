import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';
import { ILoaderState } from './iloaderState.model';
@Component({
    selector: 'http-loader',
    templateUrl: 'loader.component.html'
})
export class LoaderComponent implements OnInit {
    public show = false;
    private subscription: Subscription;
    constructor(
        private loaderService: LoaderService
    ) { }
    public ngOnInit() { 
        this.subscription = this.loaderService.loaderState
            .subscribe((state: ILoaderState) => {
                this.show = state.show;
            });
    }
    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}