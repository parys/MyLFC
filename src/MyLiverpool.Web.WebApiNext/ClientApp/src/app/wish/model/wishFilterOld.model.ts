import { BaseRestFilter } from "@app/+infrastructure";

export class WishFilterOld extends BaseRestFilter {
    public typeId? : number;
    public categoryId? : number;
    public filterText?: string;
}