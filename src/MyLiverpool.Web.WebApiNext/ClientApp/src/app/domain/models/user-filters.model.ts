import { PagedQueryBase } from '@base/infrastructure';

export class UserFilters extends PagedQueryBase {
    userName: string;
    ip: string;
    roleGroupId: number;
}
