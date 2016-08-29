import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {SecuredDirective } from "./shared/secured.directive";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, SecuredDirective]
})

export class AppComponent {
    constructor(private router: Router) {
    }
}