import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Material } from "./material.model";
import { MaterialType } from "../materialCategory/materialType.enum";
import { Pageable } from "../shared/pageable.model";
import { HttpWrapper } from "../shared/httpWrapper";
import { MaterialFilters } from "./materialFilters.model";

@Injectable()
export class MaterialService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "material/";
    }

    public getAll = (filters: MaterialFilters): Observable<Pageable<Material>> => {
        return this.http.get<Pageable<Material>>(this.actionUrl + "list/" + encodeURIComponent(JSON.stringify(filters)));
    };

    public getSingle = (id: number): Observable<Material> => {
        return this.http.get<Material>(this.actionUrl + id);
    };

    public create = (item: Material, type: MaterialType): Observable<Material> => {
        return this.http.post<Material>(`${this.actionUrl}${MaterialType[type]}/`, JSON.stringify(item));
    };

    public update = (id: number, itemToUpdate: Material): Observable<Material> => {
        return this.http.put<Material>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete = (id: number): Observable<boolean> => {
        return this.http.delete<boolean>(this.actionUrl + id);
    };

    public addView = (id: number): Observable<boolean> => {
        return this.http.get<boolean>(this.actionUrl + "addView/" + id);
    };

    public activate = (id: number): Observable<boolean> => {
        return this.http.get<boolean>(this.actionUrl + "activate/" + id);
    };

    public extractPhoto = (url: string): Observable<string[]> => {
        return this.http.get<string[]>(this.actionUrl + "imageLinks/" + url);
    }
}