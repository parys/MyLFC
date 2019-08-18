import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MaterialType, MaterialFilters, Material } from '@domain/models';
import { PagedList } from '@app/shared';
import { HttpWrapper } from '@app/+httpWrapper';
import { MATERIALS_ROUTE } from '@app/+constants';

@Injectable()
export class MaterialService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = MATERIALS_ROUTE + '/';
    }

    public getAll(filters: MaterialFilters | any): Observable<PagedList<Material>> {
        return this.http.getWithParams<PagedList<Material>>(this.actionUrl, filters );
    }

    public getLatest(): Observable<PagedList<Material>> {
        return this.http.get<PagedList<Material>>(this.actionUrl + 'latest/');
    }

    public getTop(): Observable<PagedList<Material>> {
        return this.http.get<PagedList<Material>>(this.actionUrl + 'pinned/');
    }

    public getSingle(id: number): Observable<Material> {
        return this.http.get<Material>(this.actionUrl + id);
    }

    public create(item: Material, type: MaterialType): Observable<Material> {
        return this.http.post<Material>(`${this.actionUrl}${MaterialType[type]}/`, JSON.stringify(item));
    }

    public update(id: number, itemToUpdate: Material): Observable<Material> {
        return this.http.put<Material>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    }

    public addView(id: number): Observable<boolean> {
        return this.http.patch<boolean>(this.actionUrl + id + '/read', {});
    }

    public activate(id: number): Observable<boolean> {
        return this.http.patch<boolean>(this.actionUrl + id + '/activate', {});
    }

    public extractPhoto(url: string): Observable<string[]> {
        return this.http.get<string[]>(this.actionUrl + 'imageLinks/' + url);
    }
}
