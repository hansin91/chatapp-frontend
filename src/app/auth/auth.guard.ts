import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { AuthService } from './auth.service';
import { State } from '@ngrx/store';
import * as fromAuth from '../auth/store';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private state: State<fromAuth.State>,
		private router: Router,
		private tokenService: TokenService
	) {}
	isAuthenticated: boolean;

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.authService.isAuthenticated({ token: this.tokenService.getToken() || '' }).pipe(
			map((data) => {
				if (data) {
					this.router.navigate([ '/socialapp' ]);
					return false;
				}
			}),
			catchError(() => {
				return of(true);
			})
		);
	}
}
