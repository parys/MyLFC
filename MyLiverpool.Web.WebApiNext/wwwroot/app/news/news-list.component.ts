import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef, Input  } from "@angular/core";
import { Location  } from "@angular/common";
import { NewsService } from "./news.service";
import { News } from "./news.model";
import { Observable } from "rxjs/Observable";
import { Pageable } from "../shared/pageable.model";
import { MaterialFilters } from "./newsFilters.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { RolesCheckedService, IRoles } from "../shared/index";
import { Modal } from "ng2-modal";

@Component({
    selector: "news-list",
    templateUrl: "app/news/news-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
  //  items: News[];
    @Input() items1: Observable<News[]>;
    page = 1;
    itemsPerPage = 15;
    totalItems: number;
    categoryId: number;
    userName: string;
    roles: IRoles;
    selectedItemIndex: number = undefined;

    @ViewChild("activateModal") activateModal: Modal;

    constructor(private newsService: NewsService, private route: ActivatedRoute, private location: Location,
        private rolesChecked: RolesCheckedService, private cd: ChangeDetectorRef) {
    }

    showActivateModal(index: number): void {
        this.selectedItemIndex = index;
        this.activateModal.open();
    }

    hideActivateModal(): void {
        this.selectedItemIndex = undefined;
        this.activateModal.close();
    }

    activate() {
       // console.log(this.selectedItemIndex);
       // console.log(this.items1);
       // let newsItem: News;
       // this.items1.subscribe(data => newsItem = data[this.selectedItemIndex].id);
       // var result: Observable<boolean> =
     //   this.newsService.activate(());//[this.selectedItemIndex]).id);// => result = );//.subscribe(data1 => {
      //  this.items1.elementAt(data => console.log(data));
        
     //   this.newsService.activate(
        let id;
        let result;
   //     this.items1.subscribe(data => console.log(data[this.selectedItemIndex].pending));
   //     this.items1.subscribe(data => data[this.selectedItemIndex].pending = false);
    //    this.items1.subscribe(data => id = data[this.selectedItemIndex].id);
   //     this.items1.subscribe(data => console.log(data[this.selectedItemIndex]));
        
    //    console.log(id);
     //   this.items1.subscribe(data => console.log(data[this.selectedItemIndex].pending));

        this.items1.subscribe(data => id = data[this.selectedItemIndex].id,
            e => console.log(e),
            () => {
                this.newsService.activate(id)
                    .subscribe(res => result = res,
                        e => console.log(e),
                        () => {
                            if (result) {
                                this.items1.subscribe(list => list[this.selectedItemIndex].pending = false,
                                    e => console.log(e),
                                    () => {
                                        this.cd.markForCheck();
                                        this.hideActivateModal();
                                    });
                            }
                        }
                    );
            });

        //  result.subscribe()
        //   console.log(result);
        //  if (data1) {
        //        this.items1.subscribe(list => {
        //            console.log(list[this.selectedItemIndex]);

        //             list[this.selectedItemIndex].pending = false;
//
        //             console.log(list[this.selectedItemIndex]);
        //             this.hideActivateModal();
        //             this.cd.markForCheck();
        //              }
        //         );
        //      }
        //   }));

        //console.log(newsItem);
        // => {
        //    this.newsService.activate(
        //        data[this.selectedItemIndex].id).subscribe(answer => {
        //        if (answer) {
        //            data[this.selectedItemIndex].pending = false;
        //            this.selectedItemIndex = undefined;
        //            this.activateModal.close();
        //        }
        //    });
        //});
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkedRoles;

        this.sub = this.route.params.subscribe(params => {
            if (params["page"]) {
                this.page = +params["page"];
            }
            this.categoryId = +params["categoryId"];
            this.userName = params["userName"];
            this.update();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPage(page: number) {
        this.page = page;
        this.update();
        let newUrl = `news/list/${this.page}`;
        if (this.categoryId) {
            newUrl = `${newUrl}/${this.categoryId}`;
        }
        this.location.replaceState(newUrl);
    }

    private parsePageable(pageable: Pageable<News>): void {
        //this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    update() {
        let filters = new MaterialFilters();
        filters.categoryId = this.categoryId;
        filters.materialType = "News";
        filters.userName = this.userName;
        filters.page = this.page;

        this.items1 = this.newsService
            .GetAll(filters)
            .do(res => {
                this.parsePageable(res);
            })
            .map(res => res.list);

        //     .subscribe(data => this.parsePageable(data),
        //         error => console.log(error),
        //          () => console.log("success load list news"));

        /*
         this.asyncMeals = serverCall(this.meals, page)
        .do(res => {
            this.total = res.total;
            this.p = page;
            this.loading = false;
        })
        .map(res => res.items);
}
        */
    }
}
