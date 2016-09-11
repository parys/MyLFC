import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth/auth.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    constructor(private router: Router, public auth: AuthService) { //todo need to more elegant decision
    }
}