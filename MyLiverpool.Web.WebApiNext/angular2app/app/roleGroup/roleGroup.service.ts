import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { RoleGroup } from "./roleGroup.model";
import { HttpWrapper } from "../shared/httpWrapper";

@Injectable()
export class RoleGroupService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "roleGroup/";
    }

    getAll = (): Observable<RoleGroup[]> => {
        return this.http.get(this.actionUrl).map((res: Response) => res.json());
    };

    // getSingle = (id: number): Observable<RoleGroup> => {
    //    return this.http.get(this.actionUrl + id).map(res => res.json());
    // };

    // create = (item: RoleGroup): Observable<RoleGroup> => {
    //    return this.http.post(this.actionUrl, JSON.stringify(item)).map(res => res.json());
    // };

    // update = (id: number, itemToUpdate: RoleGroup): Observable<RoleGroup> => {
    //    return this.http.put(this.actionUrl + id, JSON.stringify(itemToUpdate))
    //        .map(res => res.json());
    // };

    // delete = (id: number): Observable<boolean> => {
    //    return this.http.delete(this.actionUrl + id).map(response => response.json());
    // };
}