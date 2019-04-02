import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './auth/store';
import * as authActions from './auth/store/auth.actions';
import { TokenService } from './services/token.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	private token: string;
	constructor(private store: Store<fromAuth.State>, private tokenService: TokenService) {}

	title = 'chatAPP';
}
