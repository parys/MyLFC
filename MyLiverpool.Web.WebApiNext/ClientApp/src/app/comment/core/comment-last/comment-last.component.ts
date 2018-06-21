import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { CommentService } from "../comment.service";
import { Comment } from "@app/+common-models";
import { SignalRService } from "@app/shared";
import { Configuration } from "@app/app.constants";

@Component({
    selector: "<comment-last>",
    templateUrl: "./comment-last.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentLastComponent implements OnInit, OnDestroy {
    private sub2: Subscription;
    public items: Comment[];

    constructor(private service: CommentService,
        private config: Configuration,
        private cd: ChangeDetectorRef,
        private signalRService: SignalRService) {
    }

    public ngOnInit(): void {
        this.update();

        this.signalRService.lastCommentsSubject.subscribe((data: Comment) => {
            const index = this.items.findIndex(x => x.id === data.id);
            if (index !== -1) {
                this.items[index] = data;
            } else {
                this.items.unshift(data);
                this.items.pop();
            }
            this.cd.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        if (this.sub2) { this.sub2.unsubscribe(); }
    }

    public update(): void {
        this.sub2 = this.service
            .getLastList()
            .subscribe(data => {
                    this.items = data;
                    this.cd.markForCheck();
                },
            e => console.log(e));
    }
}