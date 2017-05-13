import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { MdDialog } from '@angular/material';
import { Subscription } from "rxjs/Subscription";
import { Person } from "./person.model";
import { PersonService } from "./person.service";
import { Pageable, DeleteDialogComponent } from "../shared/index";

@Component({
    selector: "person-list",
    templateUrl: "./person-list.component.html"
})

export class PersonListComponent implements OnInit, OnDestroy {
    sub: Subscription;
    items: Person[];
    page: number = 1;
    itemsPerPage: number = 15;
    totalItems: number;
    userName: string;

    constructor(private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location,
        private dialog: MdDialog) {
    }

    public ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
                this.page = qParams["page"] || 1;
             //   this.categoryId = qParams["categoryId"] || "";
                this.userName = qParams["userName"] || "";
            },
            error => console.log(error));
        this.update();
    }

    public ngOnDestroy(): void {
        if(this.sub) this.sub.unsubscribe();
    }

    public showDeleteModal(index: number): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        }, e => console.log(e));
    }

    public update(): void {
        //let filters = new UserFilters();
        ////  filters.categoryId = this.categoryId;
        ////  filters.materialType = "News";
        //filters.userName = this.userName;
        //filters.page = this.page;

        this.personService
            .getAll(this.page)
            .subscribe(data => this.parsePageable(data), //todo add subscription
            error => console.log(error));
    }

    public pageChanged(event: any): void {
        this.page = event.page;
        this.update();
        let newUrl = `persons?page=${this.page}`;
        //if (this.categoryId) {
        //     newUrl = `${newUrl}/${this.categoryId}`;
        // }
        this.location.replaceState(newUrl);
    };

    public setAsBestPlayer(personId: number): void {
        this.personService.setBestPlayer(personId)
            .subscribe(data => data, //todo add subscription
            error => console.log(error));
    }

    private delete(index: number): void {
        let result: boolean;
        this.personService.delete(this.items[index].id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.items.splice(index, 1);
                        this.totalItems -= 1;
                    }
                });
    }

    private parsePageable(pageable: Pageable<Person>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }
}