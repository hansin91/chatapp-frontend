import * as fromRoot from '../../../store';
import * as menu from './menu.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
	menu: menu.State;
}

export const reducers = {
	menu: menu.reducer
};

const getMenuFeatureState = createFeatureSelector<menu.State>('menus');
export const getMenu = createSelector(getMenuFeatureState, (state) => state.menus);
