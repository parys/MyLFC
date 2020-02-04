import { IAuthTokenModel } from '@auth/models';

export interface AuthStateModel {
    user: {
        userId: number,
        userName: string,
        roles: string[]
    };
    tokens: IAuthTokenModel;
}
