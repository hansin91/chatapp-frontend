import { Action } from '@ngrx/store';
import { Menu } from './menu.model';

export enum MenuActionTypes {
	LoadSideMenu = '[Menu] Load Side Menu',
	LoadSideMenuFailed = '[Menu] Load Side Menu Failed',
	LoadSideMenuSuccess = '[Menu] Load Side Menu Success'
}

export class LoadSideMenu implements Action {
	readonly type = MenuActionTypes.LoadSideMenu;
}

export class LoadSideMenuFailed implements Action {
	readonly type = MenuActionTypes.LoadSideMenuFailed;
	constructor(public payload: any) {}
}

export class LoadSideMenuSuccess implements Action {
	readonly type = MenuActionTypes.LoadSideMenuSuccess;
	constructor(public payload: Menu[]) {}
}

export type MenuActions = LoadSideMenu | LoadSideMenuFailed | LoadSideMenuSuccess;
