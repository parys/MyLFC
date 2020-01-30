import { IAuthTokenModel } from '@auth/models';

export interface AuthStateModel {
    user: {
        userId: string,
        userName: string
    };
    tokens: IAuthTokenModel;
}
