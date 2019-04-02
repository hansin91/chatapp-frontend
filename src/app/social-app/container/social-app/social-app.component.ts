import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import * as fromAuth from '../../../auth/store';
import * as authActions from '../../../auth/store/auth.actions';
import { TokenService } from 'src/app/services/token.service';
import { pipe, from, Observable } from 'rxjs';

@Component({
	selector: 'app-social-app',
	templateUrl: './social-app.component.html',
	styleUrls: [ './social-app.component.scss' ]
})
export class SocialAppComponent implements OnInit {
	constructor(
		private store: Store<fromAuth.State>,
		private state: State<fromAuth.State>,
		private tokenService: TokenService
	) {}

	isAuhenticated$: Observable<boolean>;

	ngOnInit() {
		this.isAuhenticated$ = this.store.pipe(select(fromAuth.getAuthenticated));
	}
}
