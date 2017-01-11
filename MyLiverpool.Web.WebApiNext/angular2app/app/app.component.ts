import { Component, ViewContainerRef, enableProdMode, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AuthService } from "./auth/auth.service";
import { RolesCheckedService } from "./shared/roles-checked.service";
import { IRoles } from "./shared/roles.interface";
//import { BreadcrumbService } from "./shouldRemove/index";

@Component({
    selector: "app",
    template: require("./app.component.html"),
    styles: [require("./app.component.css")],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    roles: IRoles;
    private viewContainerRef: ViewContainerRef;

    constructor(private router: Router,
        public auth: AuthService,
        private rolesChecked: RolesCheckedService,
        viewContainerRef: ViewContainerRef,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
      //  private breadcrumbService: BreadcrumbService
    ) { //todo need to more elegant decision
        this.roles = this.rolesChecked.checkRoles();
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        this.initTitleSubscriber();
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    logout() {
        this.auth.logout();
        this.roles = this.rolesChecked.checkRoles();
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

    private setUpBreadcrumbs(): void {
        //this.breadcrumbService.addFriendlyNameForRoute("", "Главная");
        //this.breadcrumbService.addFriendlyNameForRoute("/", "Главная");
        //this.breadcrumbService.addFriendlyNameForRoute("/news", "Новости");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("/news/[0-9]", "Новость");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("/news/[0-9]/edit", "Редактирование новости");

        //this.breadcrumbService.addFriendlyNameForRoute("/forum", "Форум");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("/forum/[0-9]", "Подсекция форума");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("/forum/theme/[0-9]", "Тема форума");
    }   
}