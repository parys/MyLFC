import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';

import { FaqCategory, FaqItem } from '@domain/models';

import { FaqItemService } from '../faq-item.service';
import { FaqCategoryService } from '@faq-categories/lazy/faq-category.service';

@Component({
    selector: 'faq-item-edit',
    templateUrl: './faq-item-edit.component.html'
})

export class FaqItemEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    public faqItemEditForm: FormGroup;
    private faqItemId: number;
    public item: FaqItem = new FaqItem();
    public categories: FaqCategory[];

    constructor(private categoryService: FaqCategoryService,
                private service: FaqItemService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private snackBar: MatSnackBar) { }

    public ngOnInit(): void {
        this.initFaqItemEditForm();
        this.sub = this.route.params.subscribe(params => {
            this.faqItemId = +params['id'];
            if (this.faqItemId > 0) {
                this.service.getSingle(this.faqItemId)
                    .subscribe((data: FaqItem) => this.parse(data));
            }
        });
        this.categoryService.getAll()
        .subscribe((data: FaqCategory[]) => this.categories = data);

    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
    }

    public onSubmit(): void {
        const faqItem: FaqItem = this.faqItemEditForm.value;

        this.service.createOrUpdate(this.faqItemId, faqItem)
            .subscribe((data: number) => {
                if (data) {
                    this.snackBar.open('Обновлено');
                } else {
                    this.snackBar.open('Не обновлено');
                }
            });
    }

    private parse(item: FaqItem): void {
        item = item || new FaqItem();
        this.faqItemEditForm.patchValue(item || {});
        this.faqItemId = item.id;
        this.item = item;
    }

    private initFaqItemEditForm(): void {
        this.faqItemEditForm = this.formBuilder.group({
            question: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
            answer: ['', Validators.compose([Validators.required, Validators.maxLength(400)])],
            order: [255],
            forSiteTeam: [false, Validators.required],
            faqCategoryId: ['', Validators.required]
        });
    }
}
