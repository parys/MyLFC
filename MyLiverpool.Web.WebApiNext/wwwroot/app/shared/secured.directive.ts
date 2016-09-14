import {Directive, HostBinding, ElementRef, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../auth/auth.service";

@Directive({
    selector: '[secured]'
})
export class SecuredDirective {
    @HostBinding('hidden')
    hideRouterLink: boolean;
    routerLink: any;
    @Input() secured: any;
    
    routeParams: string;

    constructor(private router: Router, private elementRef: ElementRef, private authService: AuthService) {
     //   this.authService.userSignup$.subscribe(item => this.checkRights());
       // this.authService.userSignup$.subscribe(item => this.checkRights(item));
    }

    ngAfterViewInit() {
    //    var instruction = this.router.generate(this.routeParams);
    //    var data = instruction.component.routeData.data;
    //    this.hideRouterLink = this.shouldBeHidden(data);
  //      console.log(this.secured);
    //    console.log(1);f
    }

    ngOnInit() {
        //how to get access to this private variable?
     //   console.log(this.routerLink._navigationInstruction.component.routeData.data);
        this.checkRights();
    }

    private checkRights() {
        let result = false;
        if (!this.secured) {
            result = this.authService.isLoggedIn;
        } else {
            result = this.authService.isUserInRole(this.secured);
        }
        if (!result) {
            let el: HTMLElement = this.elementRef.nativeElement;
            el.parentNode.removeChild(el);
        }
    }
}