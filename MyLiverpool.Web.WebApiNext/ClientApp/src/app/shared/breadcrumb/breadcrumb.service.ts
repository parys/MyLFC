import { Injectable } from "@angular/core";

@Injectable()
export class BreadcrumbService {
    constructor() {
        this.setUpBreadcrumbs();
    }

    private routesFriendlyNames: Map<string, string> = new Map<string, string>();
    private routesFriendlyNamesRegex: Map<string, string> = new Map<string, string>();
    private routesWithCallback: Map<string, (string: string) => string> = new Map<string, (string: string) => string>();
    private routesWithCallbackRegex: Map<string, (string: string) => string> = new Map<string, (string: string) => string>();
    private hideRoutes: Array<string> = new Array<string>();
    private hideRoutesRegex: Array<string> = new Array<string>();

    /**
     * Specify a friendly name for the corresponding route.
     *
     * @param route
     * @param name
     */
    addFriendlyNameForRoute(route: string, name: string): void {
        this.routesFriendlyNames.set(route, name);
    }

    /**
     * Specify a friendly name for the corresponding route matching a regular expression.
     *
     * @param route
     * @param name
     */
    addFriendlyNameForRouteRegex(routeRegex: string, name: string): void {
        this.routesFriendlyNamesRegex.set(routeRegex, name);
    }

    /**
     * Specify a callback for the corresponding route.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    addCallbackForRoute(route: string, callback: (id: string) => string): void {
        this.routesWithCallback.set(route, callback);
    }

    /**
     * Specify a callback for the corresponding route matching a regular expression.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    addCallbackForRouteRegex(routeRegex: string, callback: (id: string) => string): void {
        this.routesWithCallbackRegex.set(routeRegex, callback);
    }

    /**
     * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    getFriendlyNameForRoute(route: string): string {
        route = route.toString();
        let name: string;
        const routeEnd = route.substr(route.lastIndexOf("/") + 1, route.length);

        this.routesFriendlyNames.forEach((value, key, map) => {
            if (key === route) {
                name = value;
            }
        });

        this.routesFriendlyNamesRegex.forEach((value, key, map) => {
            if (new RegExp(key).exec(route)) {
                name = value;
            }
        });

        this.routesWithCallback.forEach((value, key, map) => {
            if (key === route) {
                name = value(routeEnd);
            }
        });

        this.routesWithCallbackRegex.forEach((value, key, map) => {
            if (new RegExp(key).exec(route)) {
                name = value(routeEnd);
            }
        });
        return name ? name : routeEnd;
    }

    /**
     * Specify a route (url) that should not be shown in the breadcrumb.
     */
    hideRoute(route: string): void {
        if (!this.hideRoutes.includes(route)) {
            this.hideRoutes.push(route);
        }
    }

    /**
     * Specify a route (url) regular expression that should not be shown in the breadcrumb.
     */
    hideRouteRegex(routeRegex: string): void {
        if (!this.hideRoutesRegex.includes(routeRegex)) {
            this.hideRoutesRegex.push(routeRegex);
        }
    }

    /**
     * Returns true if a route should be hidden.
     */
    isRouteHidden(route: string): boolean {
        let hide = this.hideRoutes.includes(route);

        this.hideRoutesRegex.forEach((value) => {
            if (new RegExp(value).exec(route)) {
                hide = true;
            }
        });

        return hide;
    }

    private setUpBreadcrumbs(): void {
        //this.addFriendlyNameForRoute("/", "Главная");


        //this.addFriendlyNameForRoute("/forum", "Форум");
        //this.addFriendlyNameForRouteRegex("^/forum/[0-9]+$", "Подсекция");
        //this.hideRouteRegex("^/forum/[0-9]+/themes$");
        //this.addFriendlyNameForRouteRegex("^/forum/[0-9]+/themes/[0-9]+$", "Тема");

        this.addFriendlyNameForRouteRegex("/news", "Новости");
        this.addFriendlyNameForRouteRegex("^/news/[0-9]+$", "Новость"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        //    this.addFriendlyNameForRouteRegex("^/news/[0-9]+/edit$", "Редактирование");
        this.addFriendlyNameForRouteRegex("/newsCategories", "Категории новостей");
        this.hideRouteRegex("^/newsCategories/[0-9]+$"); // this.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        //    this.addFriendlyNameForRouteRegex("^/newsCategories/[0-9]+/edit$", "Редактирование");

        this.addFriendlyNameForRouteRegex("/blogs", "Блоги");
        this.addFriendlyNameForRouteRegex("^/blogs/[0-9]+$", "Блог"); // this.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        //    this.addFriendlyNameForRouteRegex("^/blogs/[0-9]+/edit$", "Редактирование");
        this.addFriendlyNameForRouteRegex("/blogCategories", "Категории блогов");
        this.hideRouteRegex("^/blogCategories/[0-9]+$"); // this.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        //    this.addFriendlyNameForRouteRegex("^/blogCategories/[0-9]+/edit$", "Редактирование");


        this.addFriendlyNameForRouteRegex("/seasons", "Сезоны");
        this.addFriendlyNameForRoute("/seasons/calendar", "Календарь");
        this.addFriendlyNameForRouteRegex("/seasons/[0-9]+/calendar", "Календарь");
        this.addFriendlyNameForRoute("/seasons/statistics", "Статистика");
        this.hideRouteRegex("^/seasons/[0-9]+$"); //  this.addFriendlyNameForRouteRegex("^/season/[0-9]+$", "Сезон");
        //   this.addFriendlyNameForRouteRegex("^/season/[0-9]+/edit$", "Редактирование");

        //  this.addFriendlyNameForRoute("/players", "Игроки");

        this.addFriendlyNameForRouteRegex("/users", "Пользователи");
        this.addFriendlyNameForRouteRegex("^/users/[0-9]+$", "Пользователь");
        this.addFriendlyNameForRouteRegex("^/users/[0-9]+/settings$", "Настройки");
        //    this.addFriendlyNameForRouteRegex("^/users/[0-9]+/edit$", "Редактирование");


        this.addFriendlyNameForRoute("/notifications", "Уведомления");

        this.addFriendlyNameForRoute("/roleGroups", "Группы и роли");

        this.addFriendlyNameForRouteRegex("/wishes", "Пожелания");
        this.hideRouteRegex("^/wishes/[0-9]+$"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        //    this.addFriendlyNameForRouteRegex("^/wishes/[0-9]+/edit$", "Редактирование");

        this.addFriendlyNameForRouteRegex("/matches", "Матчи");
        this.addFriendlyNameForRouteRegex("^/matches/[0-9]+$", "Матч"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        //   this.addFriendlyNameForRouteRegex("^/matches/[0-9]+/edit$", "Редактирование");

        this.addFriendlyNameForRouteRegex("/clubs", "Клубы");
        this.hideRouteRegex("^/clubs/[0-9]+$"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        //  this.addFriendlyNameForRouteRegex("^/clubs/[0-9]+/edit$", "Редактирование");

        this.addFriendlyNameForRouteRegex("/persons$", "Люди");
        this.hideRouteRegex("^/persons/[0-9]+$"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        //   this.addFriendlyNameForRouteRegex("^/persons/[0-9]+/edit$", "Редактирование");
        this.addFriendlyNameForRoute("/persons/stuff", "Тренерский штаб");
        this.addFriendlyNameForRoute("/persons/stuff/first", "Первая команда");
        this.addFriendlyNameForRoute("/persons/stuff/academy", "Академия");
        this.addFriendlyNameForRoute("/persons/squad", "Состав");
        this.addFriendlyNameForRoute("/persons/squad/first", "Первая команда");
        this.addFriendlyNameForRoute("/persons/squad/academy", "Академия");
        this.addFriendlyNameForRoute("/persons/squad/loan", "В аренде");

        this.addFriendlyNameForRouteRegex("/images", "Изображения");

        this.addFriendlyNameForRouteRegex("/materialComments", "Комментарии");

        this.addFriendlyNameForRouteRegex("/pms", "Личные сообщения");
        this.addFriendlyNameForRouteRegex("/pms/[0-9]+$", "Сообщение");

        this.hideRouteRegex("^/account$");
        this.addFriendlyNameForRoute("/account/signup", "Регистрация");
        this.addFriendlyNameForRouteRegex("/account/confirmEmail", "Подтверждение пароля");
        this.addFriendlyNameForRoute("/account/forgotPassword", "Восстановление забытого пароля");
        this.addFriendlyNameForRoute("/account/unconfirmedEmail", "Ваша почта не подтверждена");
        this.addFriendlyNameForRouteRegex("/account/resetPassword", "Сброс пароля");
        this.addFriendlyNameForRoute("/account/changePassword", "Изменение пароля");


        this.addFriendlyNameForRoute("/transfers", "Трансферы");
        this.addFriendlyNameForRoute("/transfers/current", "Текущие");
        this.hideRouteRegex("^/transfers/[0-9]+$"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        // this.addFriendlyNameForRouteRegex("^/transfers/[0-9]+/edit$", "Редактирование");


        this.addFriendlyNameForRouteRegex("/injuries", "Травмы");
        this.hideRouteRegex("^/injuries/[0-9]+$"); // this.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        //    this.addFriendlyNameForRouteRegex("^/injuries/[0-9]+/edit$", "Редактирование");

        this.addFriendlyNameForRoute("/stadiums", "Стадионы");
        this.hideRouteRegex("^/stadiums/[0-9]+$"); // this.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        //   this.addFriendlyNameForRouteRegex("^/stadiums/[0-9]+/edit$", "Редактирование");

        this.addFriendlyNameForRoute("/about", "О нас");
        this.addFriendlyNameForRoute("/aboutClub", "О клубе");
        this.addFriendlyNameForRoute("/chat", "Чат");
        this.addFriendlyNameForRoute("/clubHistory", "История клуба");
        this.addFriendlyNameForRoute("/cooperation", "Сотрудничество");
        this.addFriendlyNameForRoute("/copyright", "О перепечатке информации");
        this.addFriendlyNameForRoute("/fantasy", "Fantasy Лига MyLFC");
        this.addFriendlyNameForRoute("/instructions", "Инструкции");
        this.addFriendlyNameForRoute("/job", "Работа на сайте");
        this.addFriendlyNameForRoute("/plans", "Планы");
        this.addFriendlyNameForRoute("/rules", "Правила");

        this.addFriendlyNameForRoute("/editPage", "Редактирование страницы");
        this.hideRouteRegex("^/editPage/[0-9]+$");


        this.addFriendlyNameForRoute("/polls", "Опросы");
        this.addFriendlyNameForRoute("^/polls/[0-9]+$", "Опрос");

        this.addFriendlyNameForRouteRegex("^/[a-zA-Z]+/[0-9]+/edit$", "Редактирование");
    }
}
