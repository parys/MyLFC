import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MaterialType, MaterialFilters, Material, PagedList } from '@domain/models';
import { HttpWrapper } from '@base/httpWrapper';
import { MATERIALS_ROUTE } from '@constants/routes.constants';
import { GetMaterialsListQuery, GetMaterialDetailQuery, GetOtherMaterialsListQuery } from '@network/shared/materials';

@Injectable()
export class MaterialService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = MATERIALS_ROUTE + '/';
    }

    public getAll(filters: MaterialFilters | any): Observable<PagedList<Material>> {
        return this.http.getWithParams<PagedList<Material>>(this.actionUrl, filters );
    }

    public getOthers(): Observable<GetOtherMaterialsListQuery.Response> {
        return this.http.get<GetOtherMaterialsListQuery.Response>(this.actionUrl + 'others/' );
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
    
    // new approach
    public getAll2(request: GetMaterialsListQuery.Request): Observable<GetMaterialsListQuery.Response> {
        return this.http.getWithParams<GetMaterialsListQuery.Response>(this.actionUrl, request);
    }

    public getSingle2(id: number): Observable<GetMaterialDetailQuery.Response> {
        return this.http.get<GetMaterialDetailQuery.Response>(this.actionUrl + id);
    }
}
