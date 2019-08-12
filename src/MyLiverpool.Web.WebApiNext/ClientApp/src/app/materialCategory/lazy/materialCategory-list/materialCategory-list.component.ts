import { Component, OnInit } from '@angular/core';   
import { Router } from '@angular/router';
import { MaterialCategory, MaterialType, MaterialCategoryFilter } from '../../model';
import { MaterialCategoryService } from '../../core';
import { RolesCheckedService } from '@app/+auth';
import { CustomTitleMetaService as CustomTitleService, PagedList } from '@app/shared';

@Component({
    selector: 'materialCategory-list',
    templateUrl: './materialCategory-list.component.html'
})
export class MaterialCategoryListComponent implements OnInit {
    public items: MaterialCategory[];
    public type: MaterialType;

    constructor(private service: MaterialCategoryService,
        public roles: RolesCheckedService,
        private router: Router,
        private titleService: CustomTitleService) {
    }

    public ngOnInit(): void {
        if (this.router.url.startsWith('/newsCategories')) {
            this.titleService.setTitle('Категории новостей');
            this.type = MaterialType.News;
        } else if (this.router.url.startsWith('/blogCategories')) {
            this.titleService.setTitle('Категории блогов');
            this.type = MaterialType.Blogs;
        }
        const filter = new MaterialCategoryFilter();
        filter.materialType = this.type;
        filter.sortDirection = 'asc';
        filter.sortOn = 'name';
        this.service
            .getAll(filter)
            .subscribe((data: PagedList<MaterialCategory>) => this.parsePageable(data));
    }

    private parsePageable(model: PagedList<MaterialCategory>): void {
        this.items = model.results;
    }

    public delete(index: number): void {
        this.service.delete(this.items[index].id)
            .subscribe(data => {
                if (data) {
                    this.items.splice(index, 1);
                }
            });
    }
}