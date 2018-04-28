import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { MaterialCategoryService } from "../materialCategory.service";
import { MaterialType } from "../materialType.enum";

@Component({
    selector: "materialCategory-edit",
    templateUrl: "./materialCategory-edit.component.html"
})
export class MaterialCategoryEditComponent implements OnInit, OnDestroy {
    public editCategoryForm: FormGroup;
    private id: number = 0;
    private sub: Subscription;
    private type: MaterialType;

    constructor(private service: MaterialCategoryService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute) {
        if (route.snapshot.data["type"] === MaterialType[MaterialType.News]) {
            this.type = MaterialType.News;
        } else {
            this.type = MaterialType.Blogs;
        }
    }

    public ngOnInit(): void {
        this.editCategoryForm = this.formBuilder.group({
            name: [
                "", Validators.compose([
                    Validators.required
                ])
            ],
            description: [""]
        });
        this.sub = this.route.params.subscribe(params => {
            this.id = +params["id"];
            if (this.id > 0) {
                this.service
                    .getSingle(this.id)
                    .subscribe(data => this.editCategoryForm.patchValue(data),
                        error => console.log(error));
            }
        });
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public onSubmit(): void {
        const model = this.editCategoryForm.value;
        model.id = this.id;
        
        if (this.id > 0) {
            this.service.update(this.id, model).subscribe(data => {
                if (data) {
                    this.snackBar.open("Категория успешно обновлена", null, { duration: 5000 });
                }
            }, e => console.log(e));
        } else {
            this.service.create(model, this.type).subscribe(data => {
                if (data) {
                    this.snackBar.open("Категория успешно обновлена", null, { duration: 5000 });
                }
            }, e => console.log(e));
        }
    }
}