import { IAuthTokenModel } from '@auth/models';

export interface AuthStateModel {
    user: {
        sub: number,
        name: string,
        role: string[]
    };
    tokens: IAuthTokenModel;
}
