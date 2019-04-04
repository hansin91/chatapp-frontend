import { Component, OnInit } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import * as fromAuth from '../../../auth/store';
import * as fromMenu from '../../store/menu';
import * as authActions from '../../../auth/store/auth.actions';
import * as menuActions from '../../store/menu/menu.actions';
import { TokenService } from 'src/app/services/token.service';
import { Observable } from 'rxjs';
import { Menu } from '../../store/menu/menu.model';

@Component({
	selector: 'app-social-app',
	templateUrl: './social-app.component.html',
	styleUrls: [ './social-app.component.scss' ]
})
export class SocialAppComponent implements OnInit {
	constructor(private store: Store<fromAuth.State>) {}

	sideMenus$: Observable<Menu[]>;

	ngOnInit() {
		this.store.dispatch(new menuActions.LoadSideMenu());
		this.sideMenus$ = this.store.pipe(select(fromMenu.getMenu));
	}

	logoutUser() {
		this.store.dispatch(new authActions.Logout());
	}
}
