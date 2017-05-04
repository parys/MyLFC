import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";
import { PersonService } from "./person.service";
import { Person } from "./person.model";
import { PersonType } from "./personType.model";
import { LocalStorageService, RolesCheckedService } from "../shared/index";

@Component({
    selector: "person-edit",
    templateUrl: "./person-edit.component.html"
})

export class PersonEditComponent implements OnInit {
    editForm: FormGroup;
    id: number;
    item: Person;
    types: PersonType[];
    opened: boolean = false;

    constructor(private service: PersonService,
        private route: ActivatedRoute,
        private router: Router,
        private localStorage: LocalStorageService,
        private formBuilder: FormBuilder) {
        this.item = new Person();
    }

    ngOnInit(): void {
        this.initForm();
        let id = +this.route.snapshot.params["id"] || 0;
        if (id > 0) {
            this.service.getSingle(id)
                .subscribe(data => this.parse(data),
                    error => console.log(error));
        }

        this.updateTypes();
    }

    onUpload(event: any): void {
        let file = event.currentTarget.files[0];
        let fullname = this.editForm.controls["firstName"].value + " " + this.editForm.controls["lastName"].value;
        if (file) {
            this.service.updatePhoto(fullname, file)
                .subscribe(result => {
                    this.editForm.controls["photo"].patchValue(result);
                        this.item.photo = `${result}#${Math.random()}`;
                    },
                error => console.log(error));
        }
    }
    onSubmit(): void {
        let person = this.parseForm();
        if (this.id > 0) {
            this.service.update(this.id, person)
                .subscribe(data => console.log(data.id),//this.router.navigate(["/news", data.id]),
                error => console.log(error));
        } else {
            this.service.create(person)
                .subscribe(data => console.log(data.id),//this.router.navigate(["/news", data.id]),
                error => console.log(error));
        }
    }

    getRandomNumber(): number {
        return Math.random();
    }

    private updateTypes(): void {
        this.service
            .getTypes()
            .subscribe(data => this.types = data);
    }

    private parse(data: Person): void {
        this.id = data.id;
        this.editForm.patchValue(data);
        this.item = data;
    }

    private parseForm(): Person {
        let item = new Person();
        item.id = this.id;
        item.firstName = this.editForm.controls["firstName"].value;
        item.firstRussianName = this.editForm.controls["firstRussianName"].value;
        item.lastName = this.editForm.controls["lastName"].value;
        item.lastRussianName = this.editForm.controls["lastRussianName"].value;
        item.photo = this.editForm.controls["photo"].value;
        item.type = this.editForm.controls["type"].value;
        item.birthday = this.editForm.controls["birthday"].value;

        return item;
    }

    private initForm(): void {
        this.editForm = this.formBuilder.group({
            'firstName': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])],
            'firstRussianName': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])],
            'lastName': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])],
            'lastRussianName': ["", Validators.compose([
                Validators.required, Validators.maxLength(30)])],
            'birthday': ["", Validators.required],
            'photo': [""],
            'type': ["", Validators.required]
        });
    }
}