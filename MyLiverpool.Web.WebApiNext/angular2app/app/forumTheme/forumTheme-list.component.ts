import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { ForumThemeService } from "./forumTheme.service";
import { ForumMessage } from "../forumMessage/index";
import { ForumTheme } from "./forumTheme.model";
import { RolesCheckedService, IRoles } from "../shared/index";

@Component({
    selector: "forumTheme-list",
    template: require("./forumTheme-list.component.html")
})
export class ForumThemeListComponent implements OnInit, OnDestroy {

    item: ForumTheme;
    items: ForumMessage[];
    roles: IRoles;
    private sub: Subscription;
    private sub2: Subscription;
    page: number = 1;
    itemsPerPage = 15;
    totalItems: number;

    constructor(private service: ForumThemeService,
        private rolesChecked: RolesCheckedService,
        private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;
        this.sub2 = this.route.queryParams.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
        });
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.update(id);
        });
    };

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    }

    pageChanged(event: any): void {
        this.page = event.page;
        this.update(this.item.id);
        let newUrl = `forum/theme/${this.item.id}?page=${this.page}`;

        this.location.replaceState(newUrl);
    };

    update(id: number) {
        this.service.getSingleWithMessages(id, this.page)
            .subscribe(data => {
                this.item = data;
                this.itemsPerPage = data.messages.itemPerPage;
                this.items = data.messages.list;
                this.totalItems = data.messages.totalItems;
            },
            error => console.log(error),
            () => { });
    }
}