import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { PollService } from "../../core";
import { RolesCheckedService } from "@app/+auth";
import { Poll } from "../../models";

@Component({
    selector: "poll-detail",
    templateUrl: "./poll-detail.component.html",
})

export class PollDetailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub2: Subscription;
    public item: Poll;
    public selectedUserId: number;
    public selectedUserName: string;

    constructor(private pmService: PollService,
        public roles: RolesCheckedService,
        private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.sub2 = this.pmService.getSingle(+params["id"])
                .subscribe(data => this.item = data,
                e => console.log(e));
        });
    }

    public ngOnDestroy(): void {
        if(this.sub) { this.sub.unsubscribe(); }
        if(this.sub2) { this.sub2.unsubscribe(); }
    }

    public writePm(): void {
        //if (this.roles.isSelf(this.item.senderId)) {
        //    this.selectedUserId = this.item.receiverId;
        //    this.selectedUserName = this.item.receiver;
        //} else {
        //    this.selectedUserId = this.item.senderId;
        //    this.selectedUserName = this.item.sender;
        //}
    }

    public closePmWindow(event: any): void {
        this.selectedUserId = null;
    }

   // public sanitizeByHtml(text: string): SafeHtml {
//        return this.sanitizer.bypassSecurityTrustHtml(text);
  //  }
}