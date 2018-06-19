import { Component, ViewContainerRef, OnInit, ViewEncapsulation, ElementRef, PLATFORM_ID, Inject, Renderer2, NgZone, AfterViewInit } from "@angular/core";  
import { isPlatformBrowser } from "@angular/common";  
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs"
import { filter, map } from "rxjs/operators"
import { RolesCheckedService, AuthService, IAuthStateModel, BreadcrumbService } from "@app/shared";

declare let addAd: any;

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, AfterViewInit {

   // public isRoot: boolean = false;
    private authState$: Observable<IAuthStateModel>;

    constructor(private router: Router,
        public roles: RolesCheckedService,
        private authService: AuthService,
        private viewContainerRef: ViewContainerRef,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        @Inject(PLATFORM_ID) private platformId: Object,
        private renderer: Renderer2,
        private elRef: ElementRef,
        private breadcrumbService: BreadcrumbService,
        private ngZone: NgZone
    ) {       
        this.setUpBreadcrumbs();
    }

    public ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.authState$ = this.authService.state$;
            // This starts up the token refresh preocess for the app
            this.authService.init()
                .subscribe(
                    () => { console.info("Startup success"); },
                    e => console.warn(e)
                );
        }


        this.initTitleSubscriber();
        //this.activatedRoute.fragment.subscribe(f => {
       //    if (f) {
       //        console.warn(f);
       //        const element = document.querySelector('#' + f);
       //        const tt =this.elRef.nativeElement.querySelector('#comments44');
       //        console.warn(element);
       //        console.warn(tt);
       //        if (element) {
       //            element.scrollIntoView(); // <-- omit element from the argument
       //        }
       //    }
       //});
    }

    public ngAfterViewInit(): void {
        addAd();
    }

    private initTitleSubscriber() {
        this.router.events.pipe(
            filter((event: any) => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data["title"]) {
                        if (!child.snapshot.fragment) {
                            window.scrollTo(0, 0);
                        }
                        return child.snapshot.data["title"];
                    } else {
                        return null;
                    }
                }
                return null;
            })).subscribe((title: any) => {
                this.titleService.setTitle(title);
            });

        // this.isRoot = (event["title"] === "MyLFC.ru - Сайт русскоязычных болельщиков \"Ливерпуля\"");

        /* todo research
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route: ActivatedRoute) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route: ActivatedRoute) => route.outlet === "primary")
            .mergeMap((route: ActivatedRoute) => route.fragment)
            .subscribe((event) => {
                if (event) {
                    this.renderer.setProperty(document.body, "scrollTop", 0);
                }
            }; */
    }

    private setUpBreadcrumbs(): void {
        //this.breadcrumbService.addFriendlyNameForRoute("/", "Главная");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/[a-zA-Z]+/[0-9]+/edit$", "Редактирование");

        //this.breadcrumbService.addFriendlyNameForRoute("/forum", "Форум");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("^/forum/[0-9]+$", "Подсекция");
        //this.breadcrumbService.hideRouteRegex("^/forum/[0-9]+/themes$");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("^/forum/[0-9]+/themes/[0-9]+$", "Тема");
        
        this.breadcrumbService.addFriendlyNameForRoute("/news", "Новости");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/news/[0-9]+$", "Новость"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/news/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/newsCategories$", "Категории новостей");
        this.breadcrumbService.hideRouteRegex("^/newsCategories/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
this.breadcrumbService.addFriendlyNameForRouteRegex("^/newsCategories/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/blogs$", "Блоги");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogs/[0-9]+$", "Блог"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogs/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/blogCategories$", "Категории блогов");
        this.breadcrumbService.hideRouteRegex("^/blogCategories/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogCategories/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/clubHistory", "История клуба");
        this.breadcrumbService.addFriendlyNameForRoute("/aboutClub", "О клубе");
        this.breadcrumbService.addFriendlyNameForRoute("/squad", "Состав");
        this.breadcrumbService.addFriendlyNameForRoute("/squad/first", "Первая команда");
        this.breadcrumbService.addFriendlyNameForRoute("/squad/academy", "Академия");
        this.breadcrumbService.addFriendlyNameForRoute("/squad/loan", "В аренде");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/seasons$", "Сезоны");
        this.breadcrumbService.addFriendlyNameForRoute("/seasons/calendar", "Календарь");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/seasons/[0-9]+/calendar", "Календарь");
        this.breadcrumbService.addFriendlyNameForRoute("/seasons/statistics", "Статистика");
        this.breadcrumbService.hideRouteRegex("^/seasons/[0-9]+$"); //  this.breadcrumbService.addFriendlyNameForRouteRegex("^/season/[0-9]+$", "Сезон");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/season/[0-9]+/edit$", "Редактирование");

      //  this.breadcrumbService.addFriendlyNameForRoute("/players", "Игроки");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/users", "Пользователи");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+$", "Пользователь");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+/settings$", "Настройки");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/rules", "Правила");

        this.breadcrumbService.addFriendlyNameForRoute("/notifications", "Уведомления");

        this.breadcrumbService.addFriendlyNameForRoute("/roleGroups", "Группы и роли");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/wishes$", "Пожелания");
        this.breadcrumbService.hideRouteRegex("^/wishes/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
this.breadcrumbService.addFriendlyNameForRouteRegex("^/wishes/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/matches$", "Матчи");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/matches/[0-9]+$", "Матч"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/matches/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/clubs$", "Клубы");
        this.breadcrumbService.hideRouteRegex("^/clubs/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/clubs/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/persons$", "Люди");
        this.breadcrumbService.hideRouteRegex("^/persons/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/persons/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRoute("/stuff", "Тренерский штаб");
        this.breadcrumbService.addFriendlyNameForRoute("/stuff/first", "Первая команда");
        this.breadcrumbService.addFriendlyNameForRoute("/stuff/academy", "Академия");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/images", "Изображения");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/materialComments", "Комментарии");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/pms", "Личные сообщения");

        this.breadcrumbService.addFriendlyNameForRoute("/signup", "Регистрация");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/confirmEmail", "Подтверждение пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/forgotPassword", "Восстановление забытого пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/unconfirmedEmail", "Ваша почта не подтверждена");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/resetPassword", "Сброс пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/changePassword", "Изменение пароля");


        this.breadcrumbService.addFriendlyNameForRoute("/transfers", "Трансферы");
        this.breadcrumbService.addFriendlyNameForRoute("/transfers/current", "Текущие");
        this.breadcrumbService.hideRouteRegex("^/transfers/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/transfers/[0-9]+/edit$", "Редактирование");


        this.breadcrumbService.addFriendlyNameForRouteRegex("/injuries", "Травмы");
        this.breadcrumbService.hideRouteRegex("^/injuries/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/injuries/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/stadiums", "Стадионы");
        this.breadcrumbService.hideRouteRegex("^/stadiums/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/stadiums/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/chat", "Чат");
        this.breadcrumbService.addFriendlyNameForRoute("/job", "Работа на сайте");
        this.breadcrumbService.addFriendlyNameForRoute("/plans", "Планы");
        this.breadcrumbService.addFriendlyNameForRoute("/instructions", "Инструкции");
        this.breadcrumbService.addFriendlyNameForRoute("/fantasy", "Fantasy Лига MyLFC");
        this.breadcrumbService.addFriendlyNameForRoute("/cooperation", "Сотрудничество");

        this.breadcrumbService.addFriendlyNameForRoute("/editPage", "Редактирование страницы");
        this.breadcrumbService.hideRouteRegex("^/editPage/[0-9]+$"); 
    }
}