import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../app.constants';
import { News } from './news.model';
import { Pageable } from '../../shared/pageable.model';
import {HttpWrapper} from "../../shared/httpWrapper";
import {MaterialFilters} from "../newsFilters.model";

@Injectable()
export class NewsService {

    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.ServerWithApiUrl + 'news/';
    }

    public GetAll = (filters:MaterialFilters): Observable<Pageable<News>> => {
        return this.http.get(this.actionUrl + "list/").map(res => res.json());// + encodeURIComponent(JSON.stringify(filters))).map(res => res.json());
    };

    public GetSingle = (id: number): Observable<News> => {
        return this.http.get(this.actionUrl + id).map(res => res.json());
    };

    public Create = (item: News): Observable<News> => {
        var toAdd = JSON.stringify({ ItemName: item });

        return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    };

    public Update = (id: number, itemToUpdate: News): Observable<News> => {
        // var toUpdate = 
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate))
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