import { IAuthTokenModel } from "./auth-token-model";
import { IProfileModel } from "./profile-model";

export interface IAuthStateModel {
    tokens?: IAuthTokenModel;
    profile?: IProfileModel;
    authReady?: boolean;
}