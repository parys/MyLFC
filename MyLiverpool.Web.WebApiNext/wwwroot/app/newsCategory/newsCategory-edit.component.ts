import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {NewsCategory} from "./shared/newsCategory.model";
import {NewsCategoryService} from "./shared/newsCategory.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'newsCategory-edit',
    templateUrl: 'app/newsCategory/newsCategory-edit.component.html'
})
export class NewsCategoryEditComponent implements OnInit, OnDestroy {

    editForm: FormGroup;
    id: number = 0;
    private sub: Subscription;

    constructor(private service: NewsCategoryService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            'name': [
                '', Validators.compose([
                    Validators.required
                ])
            ],
            'description': [
                '', Validators.compose([
                    Validators.required
                ])
            ]
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.service
                    .GetSingle(this.id)
                    .subscribe(data => this.editForm.patchValue(data),
                        error => console.log(error),
                        () => console.log("success get  news"));
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(): void {
        let model = new NewsCategory();
        model.id = this.id;
        model.name = this.editForm.controls["name"].value;
        model.description = this.editForm.controls["description"].value;

        let res;
        if (this.id > 0) {
            let result = this.service.Update(this.id, model).subscribe(data => res = data);
        } else {
            let result = this.service.Add(model).subscribe(data => res = data);
        }
        if (res !== null) {
            
        }

    }
}