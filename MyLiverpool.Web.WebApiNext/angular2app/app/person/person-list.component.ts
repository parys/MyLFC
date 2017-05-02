import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Person } from "./person.model";
import { PersonService } from "./person.service";
import { Pageable } from "../shared/pageable.model";
import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "person-list",
    templateUrl: "./person-list.component.html"
})

export class PersonListComponent implements OnInit {
    items: Person[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    userName: string;
    selectedItemIndex: number = null;
    @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.page = +this.route.snapshot.params || 1;
        this.update();
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
        let result: boolean;
        this.personService.delete(this.items[this.selectedItemIndex].id)
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

        this.personService
            .getAll(this.page)
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => { });
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `persons?page=${this.page}`;
        //if (this.categoryId) {
        //     newUrl = `${newUrl}/${this.categoryId}`;
        // }
        this.location.replaceState(newUrl);
    };

    private parsePageable(pageable: Pageable<Person>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
}