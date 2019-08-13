import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';

import { FaqCategoryService } from '../faq-category.service';
import { FaqCategory } from '../../../domain/models/faq-category.model';

@Component({
    selector: 'faq-category-edit',
    templateUrl: './faq-category-edit.component.html'
})

export class FaqCategoryEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public faqCategoryEditForm: FormGroup;
    private faqCategoryId: number;

    constructor(private service: FaqCategoryService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar) { }

    public ngOnInit(): void {
        this.initFaqCategoryEditForm();
        this.sub = this.route.params.subscribe(params => {
            this.faqCategoryId = +params['id'];
            if (this.faqCategoryId > 0) {
                this.service.getSingle(this.faqCategoryId)
                    .subscribe((data: FaqCategory) => this.parse(data));
            }
        });
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public onSubmit(): void {
        const faqCategory: FaqCategory = this.faqCategoryEditForm.value;

        this.service.createOrUpdate(this.faqCategoryId, faqCategory)
            .subscribe((data: number) => {
                if (data) {
                    this.snackBar.open('Категория обновлена');
                } else {
                    this.snackBar.open('Категоря не обновлена');
                }
            });
    }

    private parse(item: FaqCategory): void {
        this.faqCategoryEditForm.patchValue(item);
        this.faqCategoryId = item.id;
    }

    private initFaqCategoryEditForm(): void {
        this.faqCategoryEditForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
            order: [255],
            forSiteTeam: [false, Validators.required]
        });
    }
}
