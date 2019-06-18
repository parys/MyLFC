import { BaseRestFilter } from "@app/+infrastructure";

export class UserFiltersOld extends BaseRestFilter {
    userName: string;
    ip: string;
    roleGroupId: number;
}