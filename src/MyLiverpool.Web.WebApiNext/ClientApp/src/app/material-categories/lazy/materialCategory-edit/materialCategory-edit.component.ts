import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MaterialType } from '@domain/models';
import { CustomTitleMetaService } from '@core/services';

import { MaterialCategoryService } from '@material-categories/core';

@Component({
    selector: 'materialCategory-edit',
    templateUrl: './materialCategory-edit.component.html'
})
export class MaterialCategoryEditComponent implements OnInit, OnDestroy {
    public editCategoryForm: FormGroup;
    private id = 0;
    private sub: Subscription;
    private type: MaterialType;

    constructor(private service: MaterialCategoryService,
                private formBuilder: FormBuilder,
                private snackBar: MatSnackBar,
                private router: Router,
                private titleService: CustomTitleMetaService,
                private route: ActivatedRoute) {
        if (this.router.url.startsWith('/newsCategories')) {
            this.titleService.setTitle('Категории новостей');
            this.type = MaterialType.News;
        } else if (this.router.url.startsWith('/blogCategories')) {
            this.titleService.setTitle('Категории блогов');
            this.type = MaterialType.Blogs;
        }
    }

    public ngOnInit(): void {
        this.editCategoryForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['']
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.service
                    .getSingle(this.id)
                    .subscribe(data => this.editCategoryForm.patchValue(data));
            }
        });
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public onSubmit(): void {
        const model = this.editCategoryForm.value;
        model.id = this.id;
        model.materialType = this.type;

        this.service.createOrUpdate(this.id, model).subscribe(data => {
            if (data) {
                if (this.id > 0) {
                    this.snackBar.open('Категория обновлена', null);
                } else {
                    this.snackBar.open('Категория создана', null);
                }
            }
        });
    }
}
