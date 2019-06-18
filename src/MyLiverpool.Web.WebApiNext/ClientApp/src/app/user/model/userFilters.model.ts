import { PagedQueryBase } from '@app/+infrastructure';

export class UserFilters extends PagedQueryBase {
    userName: string;
    ip: string;
    roleGroupId: number;
}