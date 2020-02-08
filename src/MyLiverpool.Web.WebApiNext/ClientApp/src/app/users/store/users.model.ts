import { User, RoleGroup } from '@domain/models';
import { GetUsersListQuery } from '@network/shared';

export interface UsersStateModel {
    users: GetUsersListQuery.UserListDto[];
    user: User;
    roleGroups: RoleGroup[];
    request: GetUsersListQuery.Request;
    pmReceiver: { id: number, userName: string };
}
