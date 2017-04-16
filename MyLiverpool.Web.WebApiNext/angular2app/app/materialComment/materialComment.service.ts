﻿import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MaterialComment } from "./materialComment.model";
import { Pageable } from "../shared/pageable.model";
import { HttpWrapper } from "../shared/httpWrapper";

@Injectable()
export class MaterialCommentService {

    private actionUrl: string;

    constructor(private http: HttpWrapper) {
        this.actionUrl = "materialComment/";
    }

    getAll = (page: number): Observable<Pageable<MaterialComment>> => {
        return this.http.get(this.actionUrl + "list/" + page).map(res => res.json());
    };

    getAllByMaterial = (page: number, id: number): Observable<Pageable<MaterialComment>> => {
        return this.http.get(this.actionUrl + "material/" + id + "/list/" + page).map(res => res.json());
    };

    getSingle = (id: number): Observable<MaterialComment> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    create = (item: MaterialComment): Observable<MaterialComment> => {
        return this.http.post(this.actionUrl + "News/", JSON.stringify(item)).map(res => res.json());
    };

    update = (id: number, itemToUpdate: MaterialComment): Observable<MaterialComment> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
            .map(res => res.json());
    };

    delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };

    verify = (id: number): Observable<boolean> => {
        return this.http.get(this.actionUrl + "verify/" + id).map(response => response.json());
    };
}