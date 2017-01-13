import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { MaterialService } from "./material.service";
import { Material } from "./material.model";
import { MaterialCategoryService } from "../materialCategory/index";
import { RolesCheckedService, IRoles } from "../shared/index";
import { MaterialCategory } from "../materialCategory/materialCategory.model";
import { MaterialType } from "../materialCategory/materialType.enum";

@Component({
    selector: "material-edit",
    template: require("./material-edit.component.html")
})

export class MaterialEditComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
    private sub: Subscription;
    id: number;
    categories: MaterialCategory[];
    roles: IRoles;
    item: Material;
    type: MaterialType;

    constructor(private service: MaterialService,
        private materialCategoryService: MaterialCategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private rolesChecked: RolesCheckedService,
        private formBuilder: FormBuilder) {
        if (route.snapshot.data["type"] === MaterialType[MaterialType.News]) {
            this.type = MaterialType.News;
        } else {
            this.type = MaterialType.Blog;
        }
    }
                                                             
    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.initForm();
        this.sub = this.route.params.subscribe(params => { //todo
            let id = +params["id"];
            if (id > 0) {
                this.service.getSingle(id)
                    .subscribe(data => this.parse(data),
                        error => console.log(error),
                        () => {});
            } else {
                this.item = new Material();
            }
        });
        this.materialCategoryService.getAll(this.type)
            .subscribe(data => this.parseCategories(data),
            error => console.log(error),
            () => { });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit() {
        let newsItem = this.parseForm();
        if (this.id > 0) {
            this.service.update(this.id, newsItem)
                .subscribe(data => this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`, data.id]),
                error => console.log(error),
                    () => {});
        } else {
            this.service.create(newsItem, this.type)
                .subscribe(data => this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`, data.id]),
                error => console.log(error),
                    () => {});
        }
    }

    updateImage(path: string) {
        this.editForm.patchValue({ photo: path });
    }

    private parse(data: Material): void {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.item = data;
    }

    private parseForm(): Material {
        let item = new Material();
        item.id = this.id;
        item.categoryId = this.editForm.controls["categoryId"].value;
        item.title = this.editForm.controls["title"].value;
        item.brief = this.editForm.controls["brief"].value;
        item.message = this.editForm.controls["message"].value;
        item.source = this.editForm.controls["source"].value;
        item.photo = this.editForm.controls["photo"].value;
        item.pending = this.editForm.controls["pending"].value;
        item.canCommentary = this.editForm.controls["canCommentary"].value;
        item.onTop = this.editForm.controls["onTop"].value;

        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            'categoryId': ["", Validators.compose([
                Validators.required])],
            'title': ["", Validators.compose([
                Validators.required])],
            'brief': ["", Validators.compose([
                Validators.required])],
            'message': ["", Validators.compose([
                Validators.required])],
            'source': ["", Validators.compose([])],
            'photo': ["", Validators.compose([
                Validators.required])],
            'canCommentary': ["true", Validators.compose([
                Validators.required])],
            'onTop': ["false", Validators.compose([
                Validators.required])],
            'pending': ["true", Validators.compose([
                Validators.required])]
        });
    }

    private parseCategories(items: MaterialCategory[]) {
        this.categories = items;
    }
}