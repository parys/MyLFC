import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnChanges,
    AfterViewChecked,
    ElementRef,
    Renderer2
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Comment, CommentFilter, PagedList } from '@domain/models';
import { SignalRService } from '@base/signalr';

import { CommentService } from '@comments/comment.service';
import { ObserverComponent } from '@domain/base';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { AuthState } from '@auth/store';

@Component({
    selector: 'comment-section',
    templateUrl: './comment-section.component.html',
    styleUrls: ['./comment-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSectionComponent extends ObserverComponent implements OnInit, OnChanges, AfterViewChecked {
    private prevHeight = 0;
    private isScrolled: boolean;
    public items: Comment[] = [];
    public page = 1;
    public itemsPerPage = 50;
    public totalItems = 0;
    public commentAddForm: FormGroup;
    @Input() public materialId: number;
    @Input() public matchId: number;
    @Input() public type: number;
    @Input() public canCommentary = false;
    

    @Select(AuthState.isLogined) isLogined$: Observable<boolean>;

    constructor(private commentService: CommentService,
                private cd: ChangeDetectorRef,
                private route: ActivatedRoute,
                private renderer: Renderer2,
                public element: ElementRef,
                private router: Router,
                private formBuilder: FormBuilder,
                private signalRService: SignalRService) {
        super();
    }

    public ngOnInit(): void {
        this.commentAddForm = this.formBuilder.group({
            message: ['', Validators.compose([
                Validators.required, Validators.minLength(3)])]
        });
        this.type = this.type ? this.type : 3;

        const sub$ = this.signalRService.newComment.subscribe((data: Comment) => {
            if (data.matchId === this.matchId || data.materialId === this.materialId) {
                if (data.parentId == null) {
                    const index = this.items.findIndex(x => x.id === data.id);
                    if (index !== -1) {
                        this.items[index] = data;
                    } else {
                        this.items.push(data);
                        this.totalItems += 1;
                    }
                    this.cd.markForCheck();
                }
            }
        });
        this.subscriptions.push(sub$);

        const sub2$ = this.commentAddForm.valueChanges.subscribe(() => {
            this.cd.markForCheck();
        });
        this.subscriptions.push(sub2$);
    }

    // todo research
    // public ngAfterViewChecked(): void {
    //    if (this.isScrolled) return;
    //    const fragment = this.router.parseUrl(this.router.url).fragment;
    //    if (fragment) {
    //        const element = document.getElementById(fragment);
    //        if (element) {
    //            let scrollTop = document.body.offsetHeight || window.pageYOffset ||
    //                document.documentElement.offsetHeight;
    //            let clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
    //            let top = element.getBoundingClientRect().top + scrollTop - clientTop;
    //            this.renderer.addClass(element, "active");
    //            while (this.prevHeight !== top) {
    //           // do {
    //                console.log("element ");


    //                if (this.prevHeight !== top) {
    //                    console.log("!=");
    //                    console.warn("prevHeight= " + this.prevHeight);
    //                    this.prevHeight = top;
    //                    console.warn("prevHeight= " + this.prevHeight);
    //                } else {
    //                    console.log("===");
    //                }
    //                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //                clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
    //                top = element.getBoundingClientRect().top + scrollTop - clientTop;
    //            }
    //            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" } );
    //           // this.isScrolled = true;

    //        }
    //    }
    // }

    public ngAfterViewChecked(): void {
        if (this.isScrolled) { return; }
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
            const element = document.getElementById(fragment);
            if (element) {
                this.renderer.addClass(element, 'active');
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                const clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
                const top = element.getBoundingClientRect().top + scrollTop - clientTop;
                if (this.prevHeight !== top) {
                    this.prevHeight = top;
                } else {
                    element.scrollIntoView();
                    this.isScrolled = true;
                }
            }
        }
    }

    public ngOnChanges(): void {
        this.update();
        this.isScrolled = false;
    }

    public pageChanged(event: any): void {
        this.page = event;
        this.update();
    }

    public update(): void {
        const filters = new CommentFilter();
        filters.materialId = this.materialId;
        filters.matchId = this.matchId;
        if (this.materialId) {
            const sub$ = this.commentService
                .getAllByMaterial(filters)
                .subscribe(data => this.parsePageable(data),
                    null,
                    () => {
                        this.cd.markForCheck();
                    });
            this.subscriptions.push(sub$);
        } else if (this.matchId) {
            const sub$ = this.commentService
                .getAllByMatch(filters)
                .subscribe(data => this.parsePageable(data),
                    null,
                    () => {
                        this.cd.markForCheck();
                    });
            this.subscriptions.push(sub$);
        }
    }


    public trackByFn(index: number, item: Comment) {
        if (!item) { return null; }
        return item.id;
    }

    public onSubmit(): void {
        const comment: Comment = this.commentAddForm.value;
        comment.materialId = this.materialId;
        comment.matchId = this.matchId;
        comment.type = this.type ? this.type : 3; // todo
        const sub$ = this.commentService.createOrUpdate(comment.id, comment)
            .subscribe((data: any) => {
                this.commentAddForm.controls['message'].patchValue('');
            },
                null,
                () => {
                    this.cd.markForCheck();
                });
        this.subscriptions.push(sub$);
    }

    private parsePageable(pageable: PagedList<Comment>): void {
        this.items = pageable.results;
        this.page = pageable.currentPage;
        this.itemsPerPage = pageable.pageSize;
        this.totalItems = pageable.rowCount;
    }
}
