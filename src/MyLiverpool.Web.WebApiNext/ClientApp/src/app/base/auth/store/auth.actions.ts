import { IAuthTokenModel } from '@auth/models';

export class SetUser {
    static readonly type = '[Auth] Set logged user';
    constructor(public payload: { sub: number, name: string, role: string[] }) { }
}

export class StartupTokenRefresh {
    static readonly type = '[Auth] Startup token refresh';
}

export class SetTokens {
    static readonly type = '[Auth] Set tokens';
    constructor(public payload: IAuthTokenModel) { }
}

export class SetRoles {
    static readonly type = '[Auth] Set roles';
    constructor(public payload: string[]) {}
}

export class Logout {
    static readonly type = '[Auth] Logout';
}
