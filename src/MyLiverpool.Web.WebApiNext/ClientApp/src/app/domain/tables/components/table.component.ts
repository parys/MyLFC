import { AfterViewInit, ElementRef, ViewChild, Injectable, Component } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ObserverComponent } from '@domain/base/observer.component';


export declare type KeyMapper<T = any> = (value?: T) => string | number;

export declare type KeyType = string | number;


@Component({
    selector: 'table-component',
    template: ''
})
export abstract class TableComponent<T> extends ObserverComponent implements AfterViewInit {

    @ViewChild(MatSort) sort: MatSort;

    public scrollerRef: ElementRef;

    public dataSource = new MatTableDataSource<T>();

    public selection = new SelectionModel<KeyType>(true, []);

    public isLoading: boolean;

    protected selectionIndex: number;

    protected debounceScroll = 600;

    protected scrollTop = 0;

    protected scrollThreshold = 200;

    protected abstract key: KeyMapper<T>;

    protected abstract onLoad(): Observable<any>;

    protected abstract onSortChange(event: { sortOn: string; sortDirection: string; }): void;


    public ngAfterViewInit(): void {
        if (this.scrollerRef) {
            this.subscribeOnScroll();
        }

        if (this.sort) {
            this.subscribeOnSortChange();
        }
    }

    public onToggleAll() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(row => { this.selection.select(this.key(row)); });
    }

    public onSelect(event: any, item: T): void {
        const key = this.key(item);

        if (!this.selection.isMultipleSelection()) {
            this.selectSingle(key);
            return;
        }

        if (this.isCtrlPressed(event)) {
            this.selectViaCtrl(key);
        } else if (this.isShiftPressed(event)) {
            this.selectViaShift(key);
        } else {
            this.selectSingle(key);
        }
    }

    public isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    protected isCtrlPressed(e: any): boolean {
        return e.ctrlKey || e.metaKey;
    }

    protected isShiftPressed(e: any): boolean {
        return e.shiftKey && !this.selection.isEmpty();
    }

    protected selectSingle(key: string | number): void {

        const selected = this.selection.isSelected(key);
        this.selection.clear();

        if (!selected) {
            this.selectionIndex = this.dataSource.data.findIndex(x => this.key(x) === key);
            this.selection.toggle(key);
        }
    }

    protected selectViaShift(key: string | number): void {
        const index = this.dataSource.data.findIndex(x => this.key(x) === key);
        this.selection.clear();
        const ids = this.dataSource.data.map(x => this.key(x));

        if (index < this.selectionIndex) {
            this.selection.select(...ids.slice(index, this.selectionIndex + 1));
        } else {
            this.selection.select(...ids.slice(this.selectionIndex, index + 1));
        }
    }

    protected selectViaCtrl(key: string | number): void {
        if (this.selection.isEmpty()) {
            this.selectionIndex = this.dataSource.data.findIndex(x => this.key(x) === key);
        }
        this.selection.toggle(key);
    }

    protected onScroll(e: any): void {
        const { offsetHeight, scrollHeight, scrollTop } = e.target;

        if (this.scrollTop >= scrollTop || this.isLoading) {
            this.scrollTop = scrollTop;
            return;
        }

        this.scrollTop = scrollTop;

        if (offsetHeight >= scrollHeight - (scrollTop + this.scrollThreshold)) {
            this.isLoading = true;
            this.onLoad().subscribe(() => {
                this.isLoading = false;
            });
        }
    }

    protected subscribeOnScroll(): void {
        const subscription = fromEvent(this.scrollerRef.nativeElement, 'scroll')
            .pipe(
                debounceTime(this.debounceScroll)
            )
            .subscribe((e: any) => this.onScroll(e));

        this.subscriptions.push(subscription);
    }

    protected subscribeOnSortChange(): void {
        const subscription = this.sort.sortChange
            .subscribe(({ active, direction }: any) => {
                this.onSortChange({ sortOn: active, sortDirection: direction });
            });

        this.subscriptions.push(subscription);
    }

    protected refreshSelection(): void {
        const ids = this.dataSource.data.map(x => this.key(x));
        const deselected = this.selection.selected.filter(v => !ids.includes(v));
        this.selection.deselect(...deselected);
    }

    protected setDataSource(items: T[]) {
        if (items.length < this.dataSource.data.length) {
            this.scrollerRef.nativeElement.scrollTop = 0;
        }

        this.dataSource = new MatTableDataSource(items);

        this.refreshSelection();
    }

}