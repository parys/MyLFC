export class PagedList<T> {
    results: T[];
    currentPage: number = 1;
    pageSize: number = 10;
    rowCount: number;
    pageCount: number;
}