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
import { RolesCheckedService } from '@base/auth';
import { SignalRService } from '@base/signalr';

import { CommentService } from '@comments/comment.service';

@Component({
    selector: 'comment-section',
    templateUrl: './comment-section.component.html',
    styleUrls: ['./comment-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSectionComponent implements OnInit, OnChanges, AfterViewChecked {
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

    constructor(private commentService: CommentService,
        private cd: ChangeDetectorRef,
        public roles: RolesCheckedService,
        private route: ActivatedRoute,
        private renderer: Renderer2,
        public element: ElementRef,
        private router: Router,
        private formBuilder: FormBuilder,
        private signalRService: SignalRService) {
    }

    public ngOnInit(): void {
        this.commentAddForm = this.formBuilder.group({
            message: ['', Validators.compose([
                Validators.required, Validators.minLength(3)])]
        });
        this.type = this.type ? this.type : 3;

        this.signalRService.newComment.subscribe((data: Comment) => {
            console.log('1');
            data.children = data.children || [];
            if (data.matchId === this.matchId || data.materialId === this.materialId) {
                console.log('2');
                const index = this.items.findIndex(x => x.id === data.id);
                if (index !== -1) {
                    console.log('3');
                    this.items[index] = data;
                } else {
                    console.log('4');
                    if (data.parentId == null) {
                        console.log('5');
                        this.items.push(data);
                    } else {
                        console.log('6');
                        this.putComment(data, this.items);
                    }
                }
            } else {
                console.log('SKIPPED');
            }
            this.totalItems += 1;
        },
        null,
        () => this.cd.markForCheck());

        this.commentAddForm.valueChanges.subscribe(() => {
            this.cd.markForCheck();
        });
    }

    private putComment(data: Comment, items: Comment[]): boolean {
        data.children = data.children || [];
        const parentIndex = items.findIndex(x => x.id === data.parentId);
        if (parentIndex !== -1) {
            console.log('8');
            const childIndex = items[parentIndex].children.findIndex(x => x.id === data.id);
            if (childIndex !== -1) {
                console.log('9');
                items[parentIndex].children[childIndex] = data;
            } else {
                console.log('91 ADDDED');
                items[parentIndex].children.push(data);
            }
            return true;
        } else {
            console.log('10 ');
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < items.length; i++) {
                if (this.putComment(data, items[i].children)) {
                    console.log('break');
                    return true;
                }
            }
        }
        console.log('11 ');
        return false;
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
            this.commentService
                .getAllByMaterial(filters)
                .subscribe(data => this.parsePageable(data),
                    null,
                    () => {
                        this.cd.markForCheck();
                    });
        } else if (this.matchId) {
            this.commentService
                .getAllByMatch(filters)
                .subscribe(data => this.parsePageable(data),
                    null,
                    () => {
                        this.cd.markForCheck();
                    });
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
        this.commentService.createOrUpdate(comment.id, comment)
            .subscribe((data: any) => {
                this.commentAddForm.controls['message'].patchValue('');
            },
                null,
                () => {
                    this.cd.markForCheck();
                });
    }

    private parsePageable(pageable: PagedList<Comment>): void {
        this.items = pageable.results;
        this.page = pageable.currentPage;
        this.itemsPerPage = pageable.pageSize;
        this.totalItems = pageable.rowCount;
    }
}
