import { Injectable } from "@angular/core";
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

    create = (item: Signup): Observable<Signup> => {
        return this.http.post(this.actionUrl + "register/", JSON.stringify(item)).map(res => res.json());
    };

    confirmEmail = (userId: number, code: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `confirmEmail?userId=${userId}&code=${code}`).map(res => res.json());
    };

    forgotPassword = (email: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `forgotPassword?email=${email}`).map(res => res.json());
    };

    resendConfirmEmail = (email: string): Observable<boolean> => {
        return this.http.get(this.actionUrl + `resendConfirmEmail?email=${email}`).map(res => res.json());
    };

    resetPassword = (model: ResetPassword): Observable<boolean> => {
        return this.http.put(this.actionUrl + `resetPassword`, model).map(res => res.json());
    };

    changePassword = (model: ChangePassword): Observable<boolean> => {
        return this.http.put(this.actionUrl + `changePassword`, model).map(res => res.json());
    };
}