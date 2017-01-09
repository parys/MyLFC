import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Configuration } from "../app.constants";
import { HttpWrapper } from "../shared/index";
import { Signup } from "./signup.model";
import { ResetPassword } from "./resetPassword.model";
import { ChangePassword } from "./changePassword.model";

@Injectable()
export class AccountService {
    private actionUrl: string;

    constructor(private http: HttpWrapper, private configuration: Configuration) {
        this.actionUrl = configuration.serverWithApiUrl + "account/";
    }

    create = (item: Signup): Observable<boolean> => {
        return this.http.post(this.actionUrl + "register/", JSON.stringify(item)).map((res: Response) => res.json());
    };

    confirmEmail = (userId: number, code: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `confirmEmail?userId=${userId}&code=${code}`).map((res: Response) => res.json());
    };

    forgotPassword = (email: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `forgotPassword?email=${email}`).map((res: Response) => res.json());
    };

    resendConfirmEmail = (email: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `resendConfirmEmail?email=${email}`).map((res: Response) => res.json());
    };

    resetPassword = (model: ResetPassword): Observable<boolean> => {
        return this.http.put(this.actionUrl + `resetPassword`, model).map((res: Response) => res.json());
    };

    changePassword = (model: ChangePassword): Observable<boolean> => {
        return this.http.put(this.actionUrl + `changePassword`, model).map((res: Response) => res.json());
    };

    isEmailUnique = (email: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `isEmailUnique?email=${email}`).map((res: Response) => res.json());
    };

    isUserNameUnique = (userName: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `isUserNameUnique?username=${userName}`).map((res: Response) => res.json());
    };
}