import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms"; 
import { ActivatedRoute } from "@angular/router";
import { MdDialog } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { Person } from "../person.model";
import { PersonService } from "../person.service";
import { Pageable, DeleteDialogComponent } from "../../shared/index";
import { PersonType } from "../personType.enum";
import { PersonFilters } from "../personFilters.model";

@Component({
    selector: "person-list",
    templateUrl: "./person-list.component.html"
})

export class PersonListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public items: Person[];
    public filterForm: FormGroup;
    public personTypes: PersonType[];
    public page: number = 1;
    public itemsPerPage: number = 15;
    public totalItems: number;

    constructor(private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
        private dialog: MdDialog) {
    }

    public ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(qParams => {
                this.page = qParams["page"] || 1;
          //      this.userName = qParams["userName"] || "";
            },
            error => console.log(error));
        this.update();
    }

    public ngOnDestroy(): void {
        if(this.sub) this.sub.unsubscribe();
        if(this.sub2) this.sub2.unsubscribe();
    }

    public showDeleteModal(index: number): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(index);
            }
        }, e => console.log(e));
    }

    //public update(): void {
    //    this.sub2 = this.personService
    //        .getAll(this.page)
    //        .subscribe(data => this.parsePageable(data),
    //        error => console.log(error));
    //}

    public update(): void {
        const filters = new PersonFilters();
        filters.name = this.filterForm.get("name").value;
        filters.typeId = this.filterForm.get("typeId").value;
        filters.page = this.filterForm.get("page").value;

        this.personService
            .getAll(filters)
            .subscribe(data => this.parsePageable(data),
                e => console.log(e),
                () => { this.updateUrl() });
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    };

    public setAsBestPlayer(personId: number): void {
        this.personService.setBestPlayer(personId)
            .subscribe(data => data,
            error => console.log(error));
    }

    private updateUrl(): void {
        let newUrl = `persons?page=${this.page}`;

        const name = this.filterForm.get("name").value;
        if (name) {
            newUrl = `${newUrl}&name=${name}`;
        }
        const typeId = this.filterForm.get("typeId").value;
        if (typeId) {
            newUrl = `${newUrl}&typeId=${typeId}`;
        }
        
        this.location.replaceState(newUrl);
        
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

    private initFilterForm() {
        this.filterForm = this.formBuilder.group({
            typeId: [],
            name: [],
            page: []
        });
    }
}