import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { NewsService } from "./news.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { News } from "./news.model";
import { LocalStorageMine } from "../shared/localStorage";
import { RolesCheckedService, IRoles } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: "news-detail",
    templateUrl: "app/news/news-detail.component.html"
})

export class NewsDetailComponent implements OnInit, OnDestroy {
    
    private sub: Subscription;
    item: News;
    roles: IRoles;
    private title: Title;
    @ViewChild("activateModal") activateModal: ModalDirective;
    @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private newsService: NewsService,
        private route: ActivatedRoute,
        private localStorage: LocalStorageMine,
        private rolesChecked: RolesCheckedService,
        private router: Router,
        private titleService: Title) {
       // this.title = t
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;

        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            this.newsService.getSingle(id)
                .subscribe(data => this.parse(data),
                error => console.log(error),
                () => {});
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    showActivateModal(index: number): void {
        this.activateModal.show();
    }

    showDeleteModal(index: number): void {
        this.deleteModal.show();
    }

    hideModal(): void {
        this.activateModal.hide();
        this.deleteModal.hide();
    }

    activate() {
        let result;
        
        this.newsService.activate(this.item.id)
            .subscribe(res => result = res,
            e => console.log(e),
            () => {
                if (result) {
                    this.item.pending = false;
                    this.hideModal();
                }
            }
            );
    }

    delete() {
        let result;
        this.newsService.delete(this.item.id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.hideModal();
                        this.router.navigate(["/news"]);
                    }
                }
            );
    }


    private parse(item: News): void {
        this.item = item;
        this.titleService.setTitle(item.title);
        this.addView();
    }

    private addView() {
        let id = this.item.id;
        if (!this.localStorage.get(`material${id}`)) {
            this.localStorage.set(`material${id}`, "1");
            this.newsService.addView(id).subscribe(data => data);
        }
    }
}