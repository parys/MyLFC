export class PagedList<T> {
    results: T[];
    currentPage: number;
    pageSize: number;
    rowCount: number;
    pageCount: number;
}