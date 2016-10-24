import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { ForumSectionService } from "./forumSection.service";
import { ForumSection } from "./forumSection.model";

@Component({
    selector: "forumSection-list",
    templateUrl: "app/forumSection/forumSection-list.component.html"
})

export class ForumSectionListComponent implements OnInit {

    items: ForumSection[];

    constructor(private service: ForumSectionService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        
        this.service
            .getAll()
            .subscribe(data => this.items = data,
            error => console.log(error),
            () => console.log(""));
    }
}