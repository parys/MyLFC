import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../shared/pageable.model";
import { NewsCategory } from "./newsCategory.model";
import { NewsCategoryService } from "./newsCategory.service";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "newsCategory-list",
    template: require("./newsCategory-list.component.html")
})

export class NewsCategoryListComponent implements OnInit {
    roles: IRoles;
    items: NewsCategory[];

    constructor(private newsCategoryService: NewsCategoryService,
        private titleService: Title,
        private rolesChecked: RolesCheckedService) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.titleService.setTitle("Категории");
        this.newsCategoryService
            .getAll()
            .subscribe(data => this.parsePageable(data),
            error => console.log(error),
            () => {});
    }

    private parsePageable(model: NewsCategory[]): void {
        this.items = model; 
    }

    delete(index: number) {
        this.newsCategoryService.delete(this.items[index].id).subscribe(data => data,
            error => console.log(error),
            () => {});
        this.items.splice(index, 1);
    }
}