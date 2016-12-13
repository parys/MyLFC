import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Club } from "./club.model";
import { ClubService } from "./club.service";
import { Pageable } from "../shared/pageable.model";
import { ModalDirective } from "ng2-bootstrap";
//import { UserFilters } from "./userFilters.model";

@Component({
    selector: "club-list",
    template: require("./club-list.component.html")
})

export class ClubListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    items: Club[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    //categoryId: number;
    userName: string;
    selectedItemIndex: number = null; 
    @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private clubService: ClubService, private route: ActivatedRoute, private location: Location,
        titleService: Title) {
        titleService.setTitle("Клубы");
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
            //  this.categoryId = +params['categoryId'];
            //  this.userName = params['userName'];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    showDeleteModal(index: number): void {
        this.selectedItemIndex = index;
        this.deleteModal.show();
    }

    hideModal(): void {
        this.selectedItemIndex = null;
        this.deleteModal.hide();
    }

    delete(): void {
        let result;
        this.clubService.delete(this.items[this.selectedItemIndex].id)
            .subscribe(res => result = res,
            e => console.log(e),
            () => {
                if (result) {
                    this.items.splice(this.selectedItemIndex, 1);
                    this.hideModal();
                }
            }
            );
    }

    update() {
        //let filters = new UserFilters();
        ////  filters.categoryId = this.categoryId;
        ////  filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        this.clubService
            .getAll(this.page)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => { });
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `club/list/${this.page}`;
        //if (this.categoryId) {
       //     newUrl = `${newUrl}/${this.categoryId}`;
       // }
        this.location.replaceState(newUrl);
    };

    private parsePageable(pageable: Pageable<Club>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
}