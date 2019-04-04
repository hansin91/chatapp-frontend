import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import * as authActions from './auth.actions';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import * as fromRoot from '../../store';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store';

@Injectable()
export class AuthEffects {
	constructor(
		private action$: Actions,
		private router: Router,
		private authService: AuthService,
		private tokenService: TokenService,
		private store: Store<fromAuth.State>
	) {}

	@Effect()
	login$: Observable<any> = this.action$.pipe(
		ofType(authActions.AuthActionTypes.Login),
		map((action: authActions.Login) => action.payload),
		mergeMap((user: User) =>
			this.authService
				.login(user)
				.pipe(
					map((loggedinUser) => new authActions.LoginSucces(loggedinUser)),
					catchError((err) => of(new authActions.LoginFailed(err)))
				)
		)
	);

	@Effect()
	register$: Observable<any> = this.action$.pipe(
		ofType(authActions.AuthActionTypes.Register),
		map((action: authActions.Register) => action.payload),
		mergeMap((user: User) =>
			this.authService
				.register(user)
				.pipe(
					map((createdUser) => new authActions.RegisterSuccess(createdUser)),
					catchError((err) => of(new authActions.RegisterFailed(err)))
				)
		)
	);

	@Effect({ dispatch: false })
	loginSuccess$: Observable<any> = this.action$.pipe(
		ofType(authActions.AuthActionTypes.LoginSuccess),
		map((action: authActions.LoginSucces) => action.payload),
		map((payload) => {
			this.tokenService.setToken(payload.token);
			this.router.navigate([ '/socialapp' ]);
		})
	);

	@Effect()
	registerSuccess$ = this.action$.pipe(
		ofType(authActions.AuthActionTypes.RegisterSuccess),
		map((action: authActions.RegisterSuccess) => action.payload),
		map((user) => {
			return new fromRoot.Go({
				path: [ '/' ]
			});
		})
	);

	@Effect()
	validateUser$: Observable<any> = this.action$.pipe(
		ofType(authActions.AuthActionTypes.Authenticate),
		map((action: authActions.Authenticated) => action.payload),
		mergeMap((payload: any) =>
			this.authService
				.isAuthenticated(payload)
				.pipe(
					map((data) => new authActions.AuthenticatedSucces(data)),
					catchError((err) => of(new authActions.AuthenticatedFailed(err)))
				)
		)
	);

	@Effect()
	logoutUser$: Observable<any> = this.action$.pipe(
		ofType(authActions.AuthActionTypes.Logout),
		map((action: authActions.Logout) => action),
		mergeMap(() =>
			this.authService
				.logout()
				.pipe(
					map((data) => new authActions.LogoutSuccess(data)),
					catchError((err) => of(new authActions.LogoutFailed(err)))
				)
		)
	);

	@Effect()
	logoutSuccess$ = this.action$.pipe(
		ofType(authActions.AuthActionTypes.LogoutSuccess),
		map((action: authActions.LogoutSuccess) => action.payload),
		map((payload) => {
			if (payload) {
				return new fromRoot.Go({
					path: [ '/' ]
				});
			}
		})
	);
}
