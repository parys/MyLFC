import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaterialCategory } from "./materialCategory.model";
import { MaterialType } from "./materialType.enum";
import { HttpWrapper } from "@app/shared";

@Injectable()
export class MaterialCategoryService {
    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "materialCategory/";
    }

    public getAll(type: MaterialType): Observable<MaterialCategory[]> {
        return this.http.get<MaterialCategory[]>(`${this.actionUrl}${MaterialType[type]}/`);
    };

    public getSingle(id: number): Observable<MaterialCategory> {
        return this.http.get<MaterialCategory> (this.actionUrl + id);
    };

    public create(item: MaterialCategory, type: MaterialType): Observable<MaterialCategory> {
        return this.http.post<MaterialCategory>(`${this.actionUrl}${MaterialType[type]}/`, JSON.stringify(item));
    };

    public update(id: number, itemToUpdate: MaterialCategory): Observable<MaterialCategory> {
        return this.http.put<MaterialCategory>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };

    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.actionUrl + id);
    };
}