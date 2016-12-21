import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Image } from "./image.model";
import { ImageService } from "./image.service";
import { Pageable } from "../shared/pageable.model"; 

@Component({
    selector: "image-list",
    template: require("./image-list.component.html")
})

export class ImageListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    items: Image[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    selectedItem: Image;

    constructor(private service: ImageService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        //this.sub = this.route.params.subscribe(params => {
        //    if (params["page"]) {
        //        this.page = +params["page"];
        //    }
            //  this.categoryId = +params['categoryId'];
            //  this.userName = params['userName'];
            this.update();
       // });
    }

    ngOnDestroy() {
       // this.sub.unsubscribe();
    }

    showDetails(file: Image): void {
        this.selectedItem = file;
    }

    removeSelection(): void {
        this.selectedItem = null;
    }

    //private parsePageable(pageable: Pageable<Image>): void {
    //    this.items = pageable.list;
    //    this.page = pageable.pageNo;
    //    this.itemsPerPage = pageable.itemPerPage;
    //    this.totalItems = pageable.totalItems;
    //}

    update() : void {
        //let filters = new UserFilters();
        ////  filters.categoryId = this.categoryId;
        ////  filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        this.service
            .get()
            .subscribe(data => this.items = data,
            error => console.log(error),
            () => { });
    }
}