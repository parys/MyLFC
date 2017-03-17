import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
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

export class MaterialEditComponent implements OnInit {
    editForm: FormGroup;        
    id: number;
    categories: MaterialCategory[];
    roles: IRoles;
    item: Material;
    type: MaterialType;
    isInit: boolean = false;

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
        if(+this.route.snapshot.params["id"]){
            this.service.getSingle(+this.route.snapshot.params["id"])
                    .subscribe(data => this.parse(data),
                        error => console.log(error),
                        () => {});
            } else {
            this.item = new Material();
            this.isInit = true;
            };
        this.materialCategoryService.getAll(this.type)
            .subscribe(data => this.parseCategories(data),
                error => console.log(error),
                () => {});

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
        this.isInit = true;
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