import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map, tap, catchError, flatMap, first } from 'rxjs/operators';
import { Observable, Subscription, of, interval, throwError } from 'rxjs';

import { HttpWrapper } from '@base/httpWrapper';
import { StorageService } from '@base/storage';
import { RolesCheckedService } from '@base/auth/roles-checked.service';
import { SignalRService } from '@base/signalr';

import { IAuthTokenModel, IRegisterModel, ILoginModel, IRefreshGrantModel } from './models';
import { UriEncoder } from './uri-encoder';
import { environment } from '@environments/environment';
import { Store } from '@ngxs/store';
import { SetTokens, SetRoles, SetUser } from '@auth/store';

@Injectable()
export class AuthService {

    private refreshSubscription$: Subscription;


    public tokens: IAuthTokenModel;

    constructor(private http: HttpWrapper,
        private http1: HttpClient,
        private storage: StorageService,
        private signalRService: SignalRService,
        private rolesCheckedService: RolesCheckedService,
        private store: Store
    ) {

        //     this.state = new BehaviorSubject<IAuthStateModel>(this.initialState);

        // this.tokens$ = this.state.pipe(
        //     filter((state: IAuthStateModel) => state.authReady),
        //     map((state: IAuthStateModel) => state.tokens));
    }

    // new one
    public get authorizationHeader(): string {
        if (this.tokens) {
            return `${this.tokens.token_type} ${this.tokens.access_token}`;
        } else {
            return '';
        }
    }

    // old stuff
    public init(): Observable<IAuthTokenModel> {
        return this.startupTokenRefresh().pipe(
            tap(() => this.scheduleRefresh()));
    }

    public register(data: IRegisterModel): Observable<any> {
        return this.http1.post(environment + 'api/v1/account/register', data).pipe(
            catchError(res => throwError(res.error)));
    }

    public login(user: ILoginModel): Observable<any> {
        return this.getTokens(user, 'password').pipe(
            catchError(res => throwError(res.error)),
            tap(res => {
                this.scheduleRefresh();
            }));
    }

    public logout(): void {
        //    this.updateState({ tokens: null });

        this.storage.removeAuthTokens();
        this.rolesCheckedService.checkRoles();

        if (this.refreshSubscription$) {
            this.refreshSubscription$.unsubscribe();

            //        console.warn("init hub from logout");
            this.signalRService.initializeHub();
        }
    }

    public refreshTokens(): Observable<IAuthTokenModel> {
        return this.getTokens({ refresh_token: this.storage.getRefreshToken() }, 'refresh_token')
            .pipe(catchError(error => throwError('Expired')));
    }

    private getTokens(data: IRefreshGrantModel | ILoginModel | any, grantType: string): Observable<IAuthTokenModel> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' });

        Object.assign(data, { scope: 'openid offline_access' });

        let params2 = new HttpParams({ fromString: '', encoder: new UriEncoder() });
        params2 = params2.set('grant_type', grantType);
        Object.keys(data)
            .forEach(key => params2 = params2.append(key, data[key]));

        return this.http1.post<IAuthTokenModel>(environment.apiUrl + 'connect/token', params2.toString(), { headers }).pipe(
            tap((tokens: IAuthTokenModel) => {

                tokens.expiration_date = new Date(new Date().getTime() + tokens.expires_in * 1000).getTime().toString();

                this.storage.setAuthTokens(tokens);
                if (tokens.refresh_token) {
                    this.storage.setRefreshToken(tokens.refresh_token);
                }
                //  this.updateState({ authReady: true, tokens });
                this.tokens = tokens;
                this.store.dispatch(new SetTokens(tokens));
                this.getUserProfile();
            }));
    }

    private startupTokenRefresh(): Observable<any> {
        const tokenFromStorage = this.storage.retrieveTokens();
        if (!tokenFromStorage) {
            this.signalRService.initializeHub();
            return of('');
        }
        const data = this.storage.getUser();
        this.setUser(data);

        return of(tokenFromStorage).pipe(
            flatMap((tokens: IAuthTokenModel) => {
                if (+tokens.expiration_date > new Date().getTime()) {
                    //            this.updateState({ authReady: true });
                }

                return this.refreshTokens();
            }),
            catchError(e => {
                console.warn(e);
                return throwError(e);
            }));
    }

    private scheduleRefresh(): void {
        // this.refreshSubscription$ = this.tokens$.pipe(
        //     first(),
            // refresh every half the total expiration time
          //  flatMap((tokens: IAuthTokenModel) => 
            interval(this.tokens.expires_in * 500).pipe(
            flatMap(() => this.refreshTokens()))
            .subscribe();
    }

    private getUserProfile(): void {
        this.http.get<any>('users/roles') // bug make list request form service
            .subscribe((data: any) => {
                this.storage.setUser(data);
                this.storage.setRoles(data.roles); // todo temporary
                this.rolesCheckedService.checkRoles();

                this.setUser(data);
                //               console.warn("init hub from getUserProfile");
                this.signalRService.initializeHub(); // WARNING---------------------------------------------------------
            }
            );
    }

    private setUser(data: any): void {
        if (data) {
            this.store.dispatch(new SetRoles(data.roles));
            this.store.dispatch(new SetUser({ userId: data.userId, userName: data.userName }));
        }
    }
}
