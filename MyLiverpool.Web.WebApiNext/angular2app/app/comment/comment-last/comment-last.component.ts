import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { CommentService } from "../comment.service";
import { Comment } from "../comment.model";
import { Configuration } from "../../app.constants";

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
        private config: Configuration) {
    }

    public ngOnInit(): void {

        this.update();

        this.scheduleUpdateCount();
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
                error => console.log(error));
    }

    public getLink(type: number): string {
        if (type === 1) {
            return "/news";
        } else if (type === 2) {
            return "/blogs";
        }else if (type === 3) {
            return "/matches";
        }
    }
}