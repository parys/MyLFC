import { PagedQueryBase } from "@app/+infrastructure";

export class PersonFilters extends PagedQueryBase {
    public name: string;
    public type: number;
    public matchId: number;
}