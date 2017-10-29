import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { CommentService } from "../comment.service";
import { Comment } from "../comment.model";
import { Configuration } from "@app/app.constants";

@Component({
    selector: "<comment-last>",
    templateUrl: "./comment-last.component.html"
})
export class CommentLastComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public items: Comment[];

    constructor(private service: CommentService,
        private route: ActivatedRoute,
        @Inject(PLATFORM_ID) private platformId: Object,
        private config: Configuration) {
    }

    public ngOnInit(): void {
        this.update();

        if (isPlatformBrowser(this.platformId)) {
            this.scheduleUpdateCount();
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    private scheduleUpdateCount() {
        this.sub = Observable.interval(this.config.updateLastComments)
            .map(x => this.update())
            .subscribe();
    }

    public update(): void {
        this.sub2 = this.service
            .getLastList()
            .subscribe(data => this.items = data,
                e => console.log(e));
    }
}