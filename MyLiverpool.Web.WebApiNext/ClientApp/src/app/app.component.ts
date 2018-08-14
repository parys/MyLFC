import { Component, OnInit, ViewEncapsulation, PLATFORM_ID, Inject, AfterViewInit, ViewChild, HostListener } from "@angular/core";  
import { isPlatformBrowser } from "@angular/common";  
import { MatSidenav } from "@angular/material";  
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs"
import { filter, map } from "rxjs/operators"
import { BreadcrumbService } from "@app/shared";
import { AuthService, IAuthStateModel } from "@app/+auth";
import { trigger, keyframes, animate, transition, state, style } from "@angular/animations";
import * as kf from "./+keyframes";


export const SlideInOutAnimation = [
    trigger("slideInOut",
        [
            state("slideOutLeft", style({
                left: "-99%",
                position: "fixed"
            })),
            state("slideOutRight", style({
                left: "99%",
                position: "fixed"
            })),
            state("slideInRight", style({
                left: "0%",
            })),
            state("slideInLeft", style({
                left: "0%",
            })),
            transition("* => slideOutLeft", [animate(250, keyframes(kf.slideOutLeft))]),
            transition("* => slideOutRight", [animate(250, keyframes(kf.slideOutRight))]),
            transition("* => slideInRight", [animate(500, keyframes(kf.slideInRight))]),
            transition("* => slideInLeft", [animate(500, keyframes(kf.slideInLeft))])
        ])
];

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    encapsulation: ViewEncapsulation.Emulated,
    animations: [SlideInOutAnimation]
})
export class AppComponent implements OnInit, AfterViewInit {
    public currentPageIndex = 1;
    animationState = ["slideOutLeft", "", "slideOutRight"];
    orderState = [0, 1, 2];
    private resizeDisable: boolean = true;

    @HostListener("window:resize", ["$event"])
    public sizeChange(event: any) {
        this.updateGetsureState();
    }

// public isRoot: boolean = false;
    private authState$: Observable<IAuthStateModel>;
    @ViewChild("sidenav") sidenav: MatSidenav;
    constructor(private router: Router,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        @Inject(PLATFORM_ID) private platformId: Object,
        private breadcrumbService: BreadcrumbService
    ) {       
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
            this.updateGetsureState();
        }

        this.setUpBreadcrumbs();
        this.initTitleSubscriber();
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            addAd();
        }
    }

    public swiperight(evt: any): void {
        if (this.resizeDisable) {
            return;
        }
        this.animationState[this.currentPageIndex] = "slideOutRight";
 
        if (this.currentPageIndex === 0) {
            this.orderState = [0, 1, 2];
            this.currentPageIndex = 2;
        } else {
            if (this.currentPageIndex === 1) {
                this.orderState = [2, 0, 1];
            } else {
                this.orderState = [1, 2, 0];
            }
            this.currentPageIndex--;
        }
        this.animationState[this.currentPageIndex] = "slideInLeft";
    }

    public swipeleft(evt: any): void {
        if (this.resizeDisable) {
            return;
        }
        this.animationState[this.currentPageIndex] = "slideOutLeft";
        if (this.currentPageIndex === 2) {
            this.orderState = [1, 2, 0];
            this.currentPageIndex = 0;
        } else {
            if (this.currentPageIndex === 1) {
                this.orderState = [2, 0, 1];
            } else {
                this.orderState = [1, 2, 0];
            }
            this.currentPageIndex++;
        }
        this.animationState[this.currentPageIndex] = "slideInRight";
    }

    private initTitleSubscriber() {
        this.router.events.pipe(
            filter((event: any) => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                this.sidenav.close();
                this.updateGetsureState(true);
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data["title"]) {
                        return child.snapshot.data["title"];
                    } else {
                        return null;
                    }
                }
                return null;
            })).subscribe((title: any) => {
            if (title) {
                this.titleService.setTitle(title);
            }
        });
    }

    private setUpBreadcrumbs(): void {
        //this.breadcrumbService.addFriendlyNameForRoute("/", "Главная");


        //this.breadcrumbService.addFriendlyNameForRoute("/forum", "Форум");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("^/forum/[0-9]+$", "Подсекция");
        //this.breadcrumbService.hideRouteRegex("^/forum/[0-9]+/themes$");
        //this.breadcrumbService.addFriendlyNameForRouteRegex("^/forum/[0-9]+/themes/[0-9]+$", "Тема");
        
        this.breadcrumbService.addFriendlyNameForRouteRegex("/news", "Новости");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/news/[0-9]+$", "Новость"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/news/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/newsCategories", "Категории новостей");
        this.breadcrumbService.hideRouteRegex("^/newsCategories/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/newsCategories/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/blogs", "Блоги");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogs/[0-9]+$", "Блог"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogs/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/blogCategories", "Категории блогов");
        this.breadcrumbService.hideRouteRegex("^/blogCategories/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/blogCategories/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/squad", "Состав");
        this.breadcrumbService.addFriendlyNameForRoute("/squad/first", "Первая команда");
        this.breadcrumbService.addFriendlyNameForRoute("/squad/academy", "Академия");
        this.breadcrumbService.addFriendlyNameForRoute("/squad/loan", "В аренде");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/seasons", "Сезоны");
        this.breadcrumbService.addFriendlyNameForRoute("/seasons/calendar", "Календарь");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/seasons/[0-9]+/calendar", "Календарь");
        this.breadcrumbService.addFriendlyNameForRoute("/seasons/statistics", "Статистика");
        this.breadcrumbService.hideRouteRegex("^/seasons/[0-9]+$"); //  this.breadcrumbService.addFriendlyNameForRouteRegex("^/season/[0-9]+$", "Сезон");
     //   this.breadcrumbService.addFriendlyNameForRouteRegex("^/season/[0-9]+/edit$", "Редактирование");

      //  this.breadcrumbService.addFriendlyNameForRoute("/players", "Игроки");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/users", "Пользователи");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+$", "Пользователь");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+/settings$", "Настройки");
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/users/[0-9]+/edit$", "Редактирование");


        this.breadcrumbService.addFriendlyNameForRoute("/notifications", "Уведомления");

        this.breadcrumbService.addFriendlyNameForRoute("/roleGroups", "Группы и роли");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/wishes", "Пожелания");
        this.breadcrumbService.hideRouteRegex("^/wishes/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/wishes/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/matches", "Матчи");
        this.breadcrumbService.addFriendlyNameForRouteRegex("^/matches/[0-9]+$", "Матч"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
     //   this.breadcrumbService.addFriendlyNameForRouteRegex("^/matches/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/clubs", "Клубы");
        this.breadcrumbService.hideRouteRegex("^/clubs/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
      //  this.breadcrumbService.addFriendlyNameForRouteRegex("^/clubs/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/persons", "Люди");
        this.breadcrumbService.hideRouteRegex("^/persons/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
     //   this.breadcrumbService.addFriendlyNameForRouteRegex("^/persons/[0-9]+/edit$", "Редактирование");
        this.breadcrumbService.addFriendlyNameForRoute("/persons/stuff", "Тренерский штаб");
        this.breadcrumbService.addFriendlyNameForRoute("/persons/stuff/first", "Первая команда");
        this.breadcrumbService.addFriendlyNameForRoute("/persons/stuff/academy", "Академия");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/images", "Изображения");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/materialComments", "Комментарии");

        this.breadcrumbService.addFriendlyNameForRouteRegex("/pms", "Личные сообщения");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/pms/[0-9]+$", "Сообщение");

        this.breadcrumbService.hideRouteRegex("^/account");
        this.breadcrumbService.addFriendlyNameForRoute("/account/signup", "Регистрация");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/account/confirmEmail", "Подтверждение пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/account/forgotPassword", "Восстановление забытого пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/account/unconfirmedEmail", "Ваша почта не подтверждена");
        this.breadcrumbService.addFriendlyNameForRouteRegex("/account/resetPassword", "Сброс пароля");
        this.breadcrumbService.addFriendlyNameForRoute("/account/changePassword", "Изменение пароля");


        this.breadcrumbService.addFriendlyNameForRoute("/transfers", "Трансферы");
        this.breadcrumbService.addFriendlyNameForRoute("/transfers/current", "Текущие");
        this.breadcrumbService.hideRouteRegex("^/transfers/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
       // this.breadcrumbService.addFriendlyNameForRouteRegex("^/transfers/[0-9]+/edit$", "Редактирование");


        this.breadcrumbService.addFriendlyNameForRouteRegex("/injuries", "Травмы");
        this.breadcrumbService.hideRouteRegex("^/injuries/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/blog/[0-9]+$", this.getTitle);
    //    this.breadcrumbService.addFriendlyNameForRouteRegex("^/injuries/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/stadiums", "Стадионы");
        this.breadcrumbService.hideRouteRegex("^/stadiums/[0-9]+$"); // this.breadcrumbService.addCallbackForRouteRegex("^/news/[0-9]+$", this.getTitle);
     //   this.breadcrumbService.addFriendlyNameForRouteRegex("^/stadiums/[0-9]+/edit$", "Редактирование");

        this.breadcrumbService.addFriendlyNameForRoute("/about", "О нас");
        this.breadcrumbService.addFriendlyNameForRoute("/aboutClub", "О клубе");
        this.breadcrumbService.addFriendlyNameForRoute("/chat", "Чат");
        this.breadcrumbService.addFriendlyNameForRoute("/clubHistory", "История клуба");
        this.breadcrumbService.addFriendlyNameForRoute("/cooperation", "Сотрудничество");
        this.breadcrumbService.addFriendlyNameForRoute("/copyright", "О перепечатке информации");
        this.breadcrumbService.addFriendlyNameForRoute("/fantasy", "Fantasy Лига MyLFC");
        this.breadcrumbService.addFriendlyNameForRoute("/instructions", "Инструкции");
        this.breadcrumbService.addFriendlyNameForRoute("/job", "Работа на сайте");
        this.breadcrumbService.addFriendlyNameForRoute("/plans", "Планы");
        this.breadcrumbService.addFriendlyNameForRoute("/rules", "Правила");

        this.breadcrumbService.addFriendlyNameForRoute("/editPage", "Редактирование страницы");
        this.breadcrumbService.hideRouteRegex("^/editPage/[0-9]+$");


        this.breadcrumbService.addFriendlyNameForRoute("/polls", "Опросы");
        this.breadcrumbService.addFriendlyNameForRoute("^/polls/[0-9]+$", "Опрос");

        this.breadcrumbService.addFriendlyNameForRouteRegex("^/[a-zA-Z]+/[0-9]+/edit$", "Редактирование");
    }

    private updateGetsureState(force: boolean = false): void {

        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const resizeDisableNow = window.innerWidth > 767;
        if (this.resizeDisable === resizeDisableNow && !force) { return; }
        this.resizeDisable = resizeDisableNow;
        if (!resizeDisableNow) {
            this.animationState = ["slideOutLeft", "", "slideOutRight"];
        } else {
            this.animationState = ["", "", ""];
        }

        this.currentPageIndex = 1;
        this.orderState = [0, 1, 2];
    }
}