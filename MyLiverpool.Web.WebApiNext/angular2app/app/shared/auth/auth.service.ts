import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IRefreshGrantModel } from "./models/refresh-grant-model";
import { IProfileModel } from "./models/profile-model";
import { IAuthStateModel } from "./models/auth-state-model";
import { IAuthTokenModel } from "./models/auth-token-model";
import { IRegisterModel } from "./models/register-model";
import { ILoginModel } from "./models/login-model";
import { IUserProfile } from "./models/userProfile.model";
import { HttpWrapper } from "../httpWrapper";
import { StorageService } from "../storage.service";
import { RolesCheckedService } from "../roles-checked.service";
//const jwtDecode = require("jwt-decode");

@Injectable()
export class AuthService {
    public roles: string[] = [];

    private initalState: IAuthStateModel = { profile: null, tokens: null, authReady: false };
    private authReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private state: BehaviorSubject<IAuthStateModel>;
    private refreshSubscription$: Subscription;

    public state$: Observable<IAuthStateModel>;
    public tokens$: Observable<IAuthTokenModel>;
    public profile$: Observable<IProfileModel>;
    public loggedIn$: Observable<boolean>;

    constructor(private http: HttpWrapper,
        private http1: HttpClient,
        private storage: StorageService,
        private rolesCheckedService: RolesCheckedService
    ) {

        this.state = new BehaviorSubject<IAuthStateModel>(this.initalState);
        this.state$ = this.state.asObservable();

        this.tokens$ = this.state.filter((state : IAuthStateModel) => state.authReady)
            .map((state: IAuthStateModel) => state.tokens);

        this.profile$ = this.state.filter((state: IAuthStateModel) => state.authReady)
            .map((state: IAuthStateModel) => state.profile);

        this.loggedIn$ = this.tokens$.map(tokens => !!tokens);
    }

    public isUserInRole(role: string): boolean {
        if (this.roles.find(x => x.toLowerCase() === role.toLowerCase())) {
            return true;
        }
        return false;
    }

    public init(): Observable<IAuthTokenModel> {
        return this.startupTokenRefresh()
            .do(() => this.scheduleRefresh());
    }

    public register(data: IRegisterModel): Observable<Response> {
        return this.http1.post("api/v1/account/register", data)
            .catch(res => Observable.throw(res.error));
    }

    public login(user: ILoginModel): Observable<any> {
        return this.getTokens(user, "password")
            .catch(res => Observable.throw(res.error))
            .do(res => {
                this.scheduleRefresh();
            });
    }

    public logout(): void {
        this.updateState({ profile: null, tokens: null });
        if (this.refreshSubscription$) {
            this.refreshSubscription$.unsubscribe();
        }

        this.storage.removeAuthTokens();
        this.rolesCheckedService.checkRoles();
    }

    public refreshTokens(): Observable<IAuthTokenModel> {
        return this.getTokens({ refresh_token: this.storage.getRefreshToken() }, "refresh_token")
                .catch(error => Observable.throw("Session Expired"));
    }

    private updateState(newState: IAuthStateModel): void {
        const previoudState = this.state.getValue();
        this.state.next(Object.assign({}, previoudState, newState));
    }

    private getTokens(data: IRefreshGrantModel | ILoginModel, grantType: string): Observable<IAuthTokenModel> {
        const headers = new HttpHeaders({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8;" });

        Object.assign(data, { grant_type: grantType, scope: "openid offline_access" });

        const params = new URLSearchParams();
        Object.keys(data)
            .forEach(key => params.append(key, data[key]));
        return this.http1.post<IAuthTokenModel>("/connect/token", params.toString(), { headers: headers })
            .do((tokens: IAuthTokenModel) => {

                const now = new Date();
                tokens.expiration_date = new Date(now.getTime() + tokens.expires_in * 1000).getTime().toString();

                //   const profile: IProfileModel = new Object();// jwtDecode(tokens.id_token);

                this.storage.setAuthTokens(tokens);
                if (tokens.refresh_token) {
                    this.storage.setRefreshToken(tokens.refresh_token);
                }
                //  this.updateState({ authReady: true, tokens, profile });
                this.updateState({ authReady: true, tokens });
                this.getUserProfile();
            });
    }

    private startupTokenRefresh(): Observable<IAuthTokenModel> {
        return Observable.of(this.storage.retrieveTokens())
            .flatMap((tokens: IAuthTokenModel) => {
                if (!tokens) {
                    this.updateState({ authReady: true });
                    return Observable.throw("No token in Storage");
                }
               // const profile = jwtDecode(tokens.id_token);

             //   this.updateState({ tokens, profile });
                this.updateState({ tokens });

                if (+tokens.expiration_date > new Date().getTime()) {
                    this.updateState({ authReady: true });
                }

                return this.refreshTokens();
            })
            .catch(error => {
                this.logout();
                this.updateState({ authReady: true });
                return Observable.throw(error);
            });
    }

    private scheduleRefresh(): void {
        this.refreshSubscription$ = this.tokens$
            .first()
            // refresh every half the total expiration time
            .flatMap((tokens: IAuthTokenModel) => Observable.interval(tokens.expires_in * 500))
            .flatMap(() => this.refreshTokens())
            .subscribe();
    }
    
    private getUserProfile(): void {
        this.http.get<IUserProfile>("role") //bug make list request form service
            .subscribe((data: IUserProfile) => {
                    this.storage.setUserId(+data.userId);
                    this.storage.setRoles(data.roles.split(", "));
                    this.rolesCheckedService.checkRoles();
                },
                error => console.log(error)
            );
    }
}