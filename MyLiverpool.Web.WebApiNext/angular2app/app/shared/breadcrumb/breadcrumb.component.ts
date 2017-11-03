﻿import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {BreadcrumbService} from './breadcrumb.service';

/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
    selector: 'breadcrumb',
    template: `
        <ul [class.breadcrumb]="useBootstrap">
            <li *ngFor="let url of urls; let last = last" [ngClass]="{'active': last}"> <!-- disable link of last item -->
                <a role="button" *ngIf="!last && url == prefix" (click)="navigateTo('/')">{{url}}</a>
                <a role="button" *ngIf="!last && url != prefix" (click)="navigateTo(url)">{{friendlyName(url)}}</a>
                <span *ngIf="last">{{friendlyName(url)}}</span>
                <span *ngIf="last && url == prefix">{{friendlyName('/')}}</span>
            </li>
        </ul>
    `
})
export class BreadcrumbComponent implements OnInit, OnChanges {
    @Input() useBootstrap: boolean = true;
    @Input() prefix:       string  = '';
    
    public urls: string[] = new Array();
    private _routerSubscription: any;

    constructor(
        private router: Router,
        private breadcrumbService: BreadcrumbService
    ) {
        this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {
            this.urls.length = 0; //Fastest way to clear out array
            if (!navigationEnd.urlAfterRedirects && !navigationEnd.url) return;
             this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }

    ngOnInit(): void {
        
        if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
    }

    ngOnChanges(): void {
        if (!this.urls) {
            return;
        }
        
        this.urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    }

    generateBreadcrumbTrail(url: string): void {
        url = url.toString();
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this.urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        } else if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url: string): string {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    }

    ngOnDestroy(): void {
        this._routerSubscription.unsubscribe();
    }

}
