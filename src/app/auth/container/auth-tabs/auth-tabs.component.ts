import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../store';
import { catchError, map } from 'rxjs/operators';
import * as authActions from '../../store/auth.actions';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from '../../auth.service';

@Component({
	selector: 'app-auth-tabs',
	templateUrl: './auth-tabs.component.html',
	styleUrls: [ './auth-tabs.component.scss' ]
})
export class AuthTabsComponent implements OnInit {
	constructor(
		private router: Router,
		private authService: AuthService,
		private store: Store<fromAuth.State>,
		private tokenService: TokenService
	) {}
	private isLogin: boolean;
	private heading: string;

	errorMessage$: Observable<string>;
	isLoading$: Observable<boolean>;

	ngOnInit() {
		const tabs = document.querySelector('.tabs');
		M.Tabs.init(tabs, {});

		if (this.router.url === '/login') {
			this.isLogin = true;
			this.heading = 'Login';
		} else if (this.router.url === '/register') {
			this.isLogin = false;
			this.heading = 'Register';
		}
	}

	showError(): void {
		this.errorMessage$ = this.store.pipe(select(fromAuth.getError));
	}

	showLoadingBar(): void {
		this.isLoading$ = this.store.pipe(select(fromAuth.getIsLoading));
	}

	registerUser(user: User): void {
		this.store.dispatch(new authActions.Register(user));
		this.showError();
		this.showLoadingBar();
	}

	loginUser(user: User): void {
		this.store.dispatch(new authActions.Login(user));
		this.showError();
		this.showLoadingBar();
	}
}
