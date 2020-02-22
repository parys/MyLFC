import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

import { MaterialService } from '@materials/core';
import { Material, MaterialCategory, MaterialType, MaterialCategoryFilter, PagedList } from '@domain/models';
import { MaterialCategoryService } from '@material-categories/core';
import { EDIT_ROUTE, MESSAGE } from '@constants/index';
import { AuthState } from '@auth/store';
import { ConfirmationMessage } from '@notices/shared';
import { NotifierService } from '@notices/services';
import { ObserverComponent } from '@domain/base';

// todo moved to script till I found solution to include it here(and in page-editor)
// import "tinymce/plugins/fullscreen/plugin.min.js";
// import "tinymce/plugins/code/plugin.min.js";
// import "tinymce/plugins/spellchecker/plugin.min.js";
// import "tinymce/plugins/table/plugin.min.js";
// import "tinymce/plugins/visualblocks/plugin.min.js";

@Component({
    selector: 'material-edit',
    templateUrl: './material-edit.component.html'
})

export class MaterialEditComponent extends ObserverComponent implements OnInit {
    private id: number;
    public editForm: FormGroup;
    public categories: MaterialCategory[];
    public item: Material;
    public type: MaterialType;
    public additional = 'additional';

    @Select(AuthState.isEditor) isEditor$: Observable<boolean>;

    constructor(private service: MaterialService,
        private materialCategoryService: MaterialCategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private location: Location,
        private notifierService: NotifierService,
        private formBuilder: FormBuilder) {
        super();
        if (this.router.url.startsWith('/news')) {
            this.type = MaterialType.News;
        } else if (this.router.url.startsWith('/blogs')) {
            this.type = MaterialType.Blogs;
        }
    }

    public ngOnInit(): void {
        this.initForm();
        if (+this.route.snapshot.params.id) {
            this.service.getSingle(+this.route.snapshot.params.id)
                .subscribe(data => this.parse(data));
        } else {
            this.item = new Material();
        }
        const categoryFilter = new MaterialCategoryFilter();
        categoryFilter.materialType = this.type;
        this.materialCategoryService.getAll(categoryFilter)
            .subscribe((data: PagedList<MaterialCategory>) => this.parseCategories(data.results));
    }

    public onSubmit(): void {
        const newsItem: Material = this.parseForm();
        if (this.id > 0) {
            this.service.update(this.id, newsItem)
                .subscribe(data => {
                    if (!this.editForm.get('stayOnPage').value) {
                        this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`, this.id]);
                    }
                    this.snackBar.open('Материал обновлен');
                },
                    e => {
                        this.snackBar.open('Материал НЕ обновлен');
                    });
        } else {
            this.service.create(newsItem, this.type)
                .subscribe(data => {
                    if (!this.editForm.get('stayOnPage').value) {
                        this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`, data.id]);
                    }
                    this.location.go(this.router.createUrlTree([MaterialType[this.type].toLowerCase(), data.id, EDIT_ROUTE]).toString());
                    this.id = data.id;
                    this.snackBar.open('Материал создан');
                },
                    e => {
                        this.snackBar.open('Материал НЕ создан');
                    });
        }
        this.editForm.markAsPristine();
    }

    public updateImage(path: string): void {
        this.editForm.patchValue({ photo: path });
    }

    public updatePreviewImage(path: string): void {
        this.editForm.patchValue({ photoPreview: path });
    }

    public copyPhoto(): void {
        const url = this.editForm.get('source').value;
        let imgTags = '';
        this.service.extractPhoto(url).subscribe(result => {
            if (result) {
                for (const src of result) {
                    imgTags += `<img src="${src}" alt="" /><br/>`;
                }
            }
        },
            null,
            () => {
                const oldValue = this.editForm.get(MESSAGE).value;
                this.editForm.get(MESSAGE).patchValue(oldValue + imgTags);
            });
    }

    public showLeaveModal(): Observable<boolean> | boolean {
        if (this.editForm.dirty && this.editForm.touched) {
            return this.notifierService.confirm(new ConfirmationMessage({ title: 'Уйти со страницы?' }));                
        } else {
            return true;
        }
    }

    private parse(data: Material): void {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.item = data;
    }

    private parseForm(): Material {
        const item: Material = this.editForm.value;
        item.id = this.id;
        item.userId = this.item.userId; // todo should move to input
        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            categoryId: ['', Validators.required],
            title: ['', Validators.required],
            brief: ['', Validators.required],
            message: ['', Validators.required],
            source: [''],
            photoPreview: [null, Validators.required],
            photo: [null, Validators.required],
            canCommentary: [true],
            onTop: [false],
            pending: [true],
            stayOnPage: [true],
            usePhotoInBody: [true],
            tags: ['']
        });
    }

    private parseCategories(items: MaterialCategory[]) {
        this.categories = items;
    }
}
