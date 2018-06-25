import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { MaterialService } from "../../core";
import { Material } from "../../model";
import { MaterialCategoryService, MaterialCategory, MaterialType } from "@app/materialCategory";
import { RolesCheckedService } from "@app/shared";

@Component({
    selector: "material-edit",
    templateUrl: "./material-edit.component.html"
})

export class MaterialEditComponent implements OnInit {
    private id: number;
    public editForm: FormGroup;        
    public categories: MaterialCategory[];
    public item: Material;
    public type: MaterialType;
    public additional: string = "additional";

    constructor(private service: MaterialService,
        private materialCategoryService: MaterialCategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        public roles: RolesCheckedService,
        private formBuilder: FormBuilder) {
        if (route.snapshot.data["type"] === MaterialType[MaterialType.News]) {
            this.type = MaterialType.News;
        } else {
            this.type = MaterialType.Blogs;
        }
    }
                                                             
    public ngOnInit(): void {
        this.initForm();
        if(+this.route.snapshot.params["id"]){
            this.service.getSingle(+this.route.snapshot.params["id"])
                    .subscribe(data => this.parse(data),
                        error => console.log(error));
            } else {
            this.item = new Material();
            };
        this.materialCategoryService.getAll(this.type)
            .subscribe(data => this.parseCategories(data),
                error => console.log(error));

    }

    public onSubmit(): void {
        const newsItem: Material = this.parseForm();
        if (this.id > 0) {
            this.service.update(this.id, newsItem)
                .subscribe(data => {
                        if (!this.editForm.get("stayOnPage").value) {
                            this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`, data.id]);
                    }
                        this.id = data.id;
                        this.snackBar.open("Материал успешно обновлен", null, { duration: 5000 });
                    },
                e => {
                    console.log(e);
                    this.snackBar.open("Материал не был обновлен", null, { duration: 5000 });
                });
        } else {
            this.service.create(newsItem, this.type)
                .subscribe(data => {
                        if (!this.editForm.get("stayOnPage").value) {
                            this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`, data.id]);
                    }
                        this.id = data.id;
                        this.snackBar.open("Материал успешно создан", null, { duration: 5000 });
                    },
                e => {
                    console.log(e);
                    this.snackBar.open("Материал не был создан", null, { duration: 5000 });
                });
        }
    }

    public updateImage(path: string): void {
        this.editForm.patchValue({ photo: path });
    }

    public copyPhoto(): void {
        const url = this.editForm.get("source").value;
        let imgTags: string = "";
        this.service.extractPhoto(url).subscribe(result => {
                if (result) {
                    for (let src of result) {
                        imgTags += `<img src="${src}" alt="" /><br/>`;
                    }
                }
            },
            e => console.log(e), () => {
                const oldValue = this.editForm.get("message").value;
                this.editForm.get("message").patchValue(oldValue + imgTags);
            });
    }

    private parse(data: Material): void {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.item = data;
    }

    private parseForm(): Material {
        const item: Material = this.editForm.value;
        item.id = this.id;
        item.userId = this.item.userId;//todo should move to input
        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            categoryId: ["", Validators.required],
            title: ["", Validators.required],
            brief: ["", Validators.required],
            message: ["", Validators.required],
            source: [""],
            photo: ["", Validators.required],
            canCommentary: [true, Validators.required],
            onTop: [false, Validators.required],
            pending: [true, Validators.required],
            stayOnPage: [true],
            usePhotoInBody: [true]
    });
    }

    private parseCategories(items: MaterialCategory[]) {
        this.categories = items;
    }
}