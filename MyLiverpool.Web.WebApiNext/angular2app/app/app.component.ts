import { Component, ViewContainerRef, enableProdMode } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AuthService } from "./auth/auth.service";
import { RolesCheckedService } from "./shared/roles-checked.service";
import { IRoles } from "./shared/roles.interface";

@Component({
    selector: "app",
    template: require("./app.component.html")
})

export class AppComponent {
    roles: IRoles;
    private viewContainerRef: ViewContainerRef;

    constructor(private router: Router,
        public auth: AuthService,
        private rolesChecked: RolesCheckedService,
        viewContainerRef: ViewContainerRef,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) { //todo need to more elegant decision
        this.roles = this.rolesChecked.checkedRoles;
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef; 
      //  titleService.setTitle("Главная");
        this.initTitleSubscriber();
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    private initTitleSubscriber() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === "primary")
            .mergeMap(route => route.data)
            .subscribe((event) => this.titleService.setTitle(event["title"]));
    }

    logout() {
        this.auth.logout();
    }
}