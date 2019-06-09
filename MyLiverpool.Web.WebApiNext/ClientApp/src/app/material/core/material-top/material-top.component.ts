//import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
//import { Router, NavigationEnd } from "@angular/router";
//import { Subscription } from "rxjs";
//import { MaterialService } from "../material.service";
//import { Material } from "../../model";
//import { PagedList } from "@app/shared";

//@Component({
//    selector: "material-top",
//    templateUrl: "./material-top.component.html",
//    styleUrls: ["./material-top.component.scss"],
//    changeDetection: ChangeDetectionStrategy.OnPush
//})
//export class MaterialTopComponent implements OnInit, OnDestroy {
//    private sub: Subscription;
//    private navigationSubscription: Subscription;
//    public items: Material[];

//    constructor(private router: Router,
//        private materialService: MaterialService,
//        private cd: ChangeDetectorRef) {
//        this.navigationSubscription = this.router.events.subscribe((e: any) => {
//            // If it is a NavigationEnd event re-initalise the component
//            if (e instanceof NavigationEnd) {
//                this.update();
//            }
//        });
//    }

//    public ngOnInit(): void {
//      this.update();
//    }

//    public ngOnDestroy(): void {
//        if(this.sub) this.sub.unsubscribe();
//        if(this.navigationSubscription) this.navigationSubscription.unsubscribe();
//    }

//    private parsePageable(pageable: PagedList<Material>): void {
//        this.items = pageable.results;
//    }
//}