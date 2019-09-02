export class PagedList<T> {
    results: T[];
    currentPage = 1;
    pageSize = 10;
    rowCount: number;
    pageCount: number;
}
