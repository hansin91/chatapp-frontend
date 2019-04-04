import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as menuActions from './menu.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class MenuEffects {
	constructor(private menuService: MenuService, private action$: Actions) {}

	@Effect()
	loadSideMenu$: Observable<Action> = this.action$.pipe(
		ofType(menuActions.MenuActionTypes.LoadSideMenu),
		map((action: menuActions.LoadSideMenu) => action),
		exhaustMap((action: menuActions.LoadSideMenu) =>
			this.menuService
				.getSideMenu()
				.pipe(
					map((menu: any) => new menuActions.LoadSideMenuSuccess(menu.menus)),
					catchError((err) => of(new menuActions.LoadSideMenuFailed(err)))
				)
		)
	);
}
