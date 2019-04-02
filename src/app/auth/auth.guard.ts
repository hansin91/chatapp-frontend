import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, pipe, from } from 'rxjs';
import { map, catchError, switchMap, take } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { AuthService } from './auth.service';
import { State, Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/store';
import * as authActions from '../auth/store/auth.actions';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private state: State<fromAuth.State>,
		private store: Store<fromAuth.State>,
		private router: Router,
		private tokenService: TokenService
	) {}
	isAuthenticated: boolean;
	token: string;

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		this.token = this.tokenService.getToken();
		if (!this.token) {
			return true;
		} else {
			this.router.navigate([ '/socialapp' ]);
			return false;
		}
	}
}
