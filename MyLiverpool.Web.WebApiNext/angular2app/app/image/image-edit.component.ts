import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Location } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Image } from "./image.model";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "image-edit",
    template: require("./image-edit.component.html")
})
export class ImageEditComponent implements OnInit, OnDestroy {
    //messageForm: FormGroup;
    //private sub: Subscription;
    //items: ChatMessage[];
    //page: number = 1;
    //itemsPerPage: number = 15;
    //totalItems: number;
    //roles: IRoles;
    @Input() item: Image;

    constructor(//private service: ChatMessageService,
        //  private route: ActivatedRoute,
        //  private formBuilder: FormBuilder,
        //private rolesChecked: RolesCheckedService
    ) {
    }

    ngOnInit() {
        // this.roles = this.rolesChecked.checkedRoles;
        //  this.initForm();
        //   this.update();
    }

    ngOnDestroy() {
    }
}