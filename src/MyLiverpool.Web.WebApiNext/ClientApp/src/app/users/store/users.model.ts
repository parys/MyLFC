import { RoleGroup } from '@domain/models';
import { GetUsersListQuery, GetUserDetailQuery } from '@network/shared/users';

export interface UsersStateModel {
    users: GetUsersListQuery.UserListDto[];
    user: GetUserDetailQuery.Response;
    roleGroups: RoleGroup[];
    request: GetUsersListQuery.Request;
    pmReceiver: { id: number, userName: string };
}
