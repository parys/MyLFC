import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, AfterViewChecked, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Comment } from "../comment.model";
import { CommentService } from "../comment.service";
import { RolesCheckedService, Pageable } from "@app/shared";

@Component({
    selector: "comment-section",
    templateUrl: "./comment-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSectionComponent implements OnInit, OnChanges, AfterViewChecked {
    private scrolled: boolean = false;
    private prevChatHeight: number = 0;
    private commentsElem: any;
    public items: Comment[] = [];
    public page: number = 1;
    public itemsPerPage: number = 50;
    public totalItems: number = 0;
    public commentAddForm: FormGroup;
    @Input() public materialId: number;
    @Input() public matchId: number;
    @Input() public type: number;
    @Input() public canCommentary: boolean = false;

    constructor(private commentService: CommentService,
        private cd: ChangeDetectorRef,
        public roles: RolesCheckedService,
        private route: ActivatedRoute,
        public element: ElementRef,
    private router: Router
        , private formBuilder: FormBuilder) {   
    }   

    public ngOnInit(): void {
        this.commentAddForm = this.formBuilder.group({
            message: ["", Validators.compose([
                Validators.required, Validators.minLength(3)])]
        });
        this.commentAddForm.valueChanges.subscribe(() => {
                this.cd.markForCheck();
            }
        );
        this.update();
        this.cd.markForCheck();
        this.type = this.type ? this.type : 3;


        this.commentsElem = this.element.nativeElement.querySelector("#comments");
    }
    
    public ngAfterViewChecked(): void {

       // if (this.canScrollDown()) {
       //     this.scrollDown();
      //  }
        console.warn(this.commentsElem);
        if (!this.scrolled) {
            const fragment = this.router.parseUrl(this.router.url).fragment;
            if (fragment) {
             //   console.log(fragment);
                const element = document.querySelector('#' + fragment);
                const element3 = document.getElementById('#' + fragment);
                console.log(element);
                console.log(1);
                if (element) {
                //    console.log(element.clientHeight);
                    console.log(element.scrollHeight);
                    console.log(element.scrollWidth);
                }
                console.log(element3);
                if (element3) {
               //     console.log(element3.clientHeight);
                    console.log(element3.offsetHeight);
                    console.log(element3.scrollHeight);
                    console.log(element3.scrollTop);
                }
                if (element) {
                    console.log(1234);
                    element.scrollIntoView();
                    this.scrolled = true;
                }
            }
        }
    }

    private canScrollDown(): boolean {
        /* compares prev and current scrollHeight */

        var can = (this.prevChatHeight !== this.commentsElem.scrollHeight);
        this.prevChatHeight = this.commentsElem.scrollHeight;
        return can;
    }

    public scrollDown(): void {
        this.commentsElem.scrollTop = this.commentsElem.scrollHeight;
    }

    public ngOnChanges(): void {
        this.update();
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    };

    public update(): void {
        if (this.materialId) {
            this.commentService
                .getAllByMaterial(this.page, this.materialId)
                .subscribe(data => this.parsePageable(data),
                    e => console.log(e),
                    () => {
                        this.cd.markForCheck();
                    });
        } else if (this.matchId) {
            this.commentService
                .getAllByMatch(this.page, this.matchId)
                .subscribe(data => this.parsePageable(data),
                    e => console.log(e),
                    () => {
                        this.cd.markForCheck();
                    });
        }
    }

    private parsePageable(pageable: Pageable<Comment>): void {
        this.items = pageable.list;
        this.page = pageable.pageNo;
        this.itemsPerPage = pageable.itemPerPage;
        this.totalItems = pageable.totalItems;
    }

    public onSubmit(): void {
        this.commentAddForm.markAsPending();
        const comment: Comment = this.commentAddForm.value;
        comment.materialId = this.materialId;
        comment.matchId = this.matchId;
        comment.type = this.type ? this.type : 3;//todo
        this.commentService.create(comment)
            .subscribe(data => {
                    this.items.push(data);
                    this.totalItems += 1;
                    this.commentAddForm.controls["message"].patchValue("");
                },
                e => console.log(e),
                () => {
                    this.cd.markForCheck();
                });
    }
}
