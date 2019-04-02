import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { AuthService } from '../auth/auth.service';
import { State } from '@ngrx/store';
import * as fromAuth from '../auth/store';

@Injectable({
	providedIn: 'root'
})
export class SocialAppGuard implements CanActivate {
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
		this.isAuthenticated = this.state.value.auth.isAuthenticated;
		if (this.isAuthenticated) {
			return true;
		} else {
			this.router.navigate([ '/login' ]);
			return false;
		}
	}
}
