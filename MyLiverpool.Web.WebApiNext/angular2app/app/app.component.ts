import { Component, ViewContainerRef, enableProdMode, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { RolesCheckedService } from "./shared/roles-checked.service";
import { IRoles } from "./shared/roles.interface";
import { BreadcrumbService } from "ng2-breadcrumb/ng2-breadcrumb";

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
        private rolesChecked: RolesCheckedService,
        viewContainerRef: ViewContainerRef,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private breadcrumbService: BreadcrumbService
    ) { //todo need to more elegant decision              
        this.roles = this.rolesChecked.checkRoles();
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        this.initTitleSubscriber();
        this.setUpBreadcrumbs();
    }

    private initTitleSubscriber() {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route: ActivatedRoute) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route: ActivatedRoute) => route.outlet === "primary")
            .mergeMap((route: ActivatedRoute) => route.data)
            .subscribe((event) => this.titleService.setTitle(event["title"]));
    }

    private setUpBreadcrumbs(): void {
        //this.breadcrumbService.addFriendlyNameForRoute("/", "Главная");

        this.breadcrumbService.addFriendlyNameForRoute("/forum", "Форум");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/forum/[0-9]+$", "Подсекция");
        this.breadcrumbService.hideRouteRegex("^/forum/[0-9]+/themes$");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/forum/[0-9]+/themes/[0-9]+$", "Тема");
        
        this.breadcrumbService.addFriendlyNameForRouteRegex("/news", "Новости");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/news/[0-9]+$", "Новость"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/news/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/newsCategories", "Категории новостей");
        this.breadcrumbService.hideRouteRegex("^/newsCategories/[0-9]+$"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/newsCategories/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/blogs", "Блоги");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogs/[0-9]+$", "Блог"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogs/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/blogCategories", "Категории блогов");
        this.breadcrumbService.hideRouteRegex("^/blogCategories/[0-9]+$"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogCategories/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/clubHistory", "История клуба");
        this.breadcrumbService.addFriendlyNameForRoute("/aboutClub", "О клубе");
        this.breadcrumbService.addFriendlyNameForRoute("/coachTeam", "Тренерский штаб");
        this.breadcrumbService.addFriendlyNameForRoute("/squad", "Состав");

        this.breadcrumbService.addFriendlyNameForRoute("/seasons", "Сезоны");
        this.breadcrumbService.addFriendlyNameForRoute("/seasons/calendar", "Календарь");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/season/[0-9]+$", "Сезон");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/season/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/players", "Игроки");
        this.breadcrumbService.addFriendlyNameForRoute("/players/statistics", "Статистика");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/users", "Пользователи");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+$", "Пользователь");

        this.breadcrumbService.addFriendlyNameForRoute("/rules", "Правила");

        this.breadcrumbService.addFriendlyNameForRoute("/roleGroups", "Группы и роли");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/wishes", "Пожелания");
        this.breadcrumbService.hideRouteRegex("^/wishes/[0-9]+$"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/wishes/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/matches", "Матчи");
        this.breadcrumbService.hideRouteRegex("^/matches/[0-9]+$"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/matches/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/clubs", "Клубы");
        this.breadcrumbService.hideRouteRegex("^/clubs/[0-9]+$"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/clubs/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/persons", "Люди");
        this.breadcrumbService.hideRouteRegex("^/persons/[0-9]+$"); //todo this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/persons/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/images", "Изображения");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/materialComments", "Комментарии");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/pms", "Личные сообщения");

        this.breadcrumbService.addFriendlyNameForRoute("/signup", "Регистрация");
        this.breadcrumbService.addFriendlyNameForRoute("/confirmEmail", "Подтверждение пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/forgotPassword", "Восстановление забытого пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/unconfirmedEmail", "Ваша почта не подтверждена");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/resetPassword", "Сброс пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/changePassword", "Изменение пароля");
    }   

    getTitle(id: string = null): string {
        return "123";
    }
}