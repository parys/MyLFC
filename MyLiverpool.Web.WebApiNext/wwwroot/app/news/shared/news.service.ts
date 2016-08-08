import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../app.constants';
import { News } from './news.model';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'news/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<News> => {
        return this._http.get(this.actionUrl).map((response: Response) => <any>response.json());
    };

    public GetSingle = (id: number): Observable<News> => {
        return this._http.get(this.actionUrl + id).map(res => res.json());
    };

    public Add = (item: News): Observable<News> => {
        var toAdd = JSON.stringify({ ItemName: item });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers }).map(res => res.json());
    };

    public Update = (id: number, itemToUpdate: News): Observable<Response> => {
        return this._http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => res.json());
    };

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id);
    };
}