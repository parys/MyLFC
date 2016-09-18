﻿import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../app.constants';
import { NewsCategory } from './NewsCategory.model';
import {HttpWrapper} from "../../shared/httpWrapper";

@Injectable()
export class NewsCategoryService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + 'newsCategory/';
    }

    public GetAll = (): Observable<NewsCategory[]> => {
        return this.http.get(this.actionUrl).map(res => res.json());
    };

    public GetSingle = (id: number): Observable<NewsCategory> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    public Add = (item: NewsCategory): Observable<NewsCategory> => {
        var toAdd = JSON.stringify({ ItemName: item });

        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    public Update = (id: number, itemToUpdate: NewsCategory): Observable<NewsCategory> => {
        var toUpdate = JSON.stringify(itemToUpdate);
        return this.http.put(this.actionUrl + id, toUpdate)
            .map(res => res.json());
    };

    public Delete = (id: number): Observable<boolean> => {
        return this.http.delete(this.actionUrl + id).map(response => response.json());
    };

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}