﻿export class PagedQueryBase {
    public currentPage: number = 1;
    public pageSize: number;
    public sortOn: string;
    public sortDirection: string;
}