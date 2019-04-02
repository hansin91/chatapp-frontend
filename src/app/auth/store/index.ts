import * as fromRoot from '../../store';
import * as auth from './auth.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
	auth: auth.State;
}

export const reducers = {
	auth: auth.reducer
};

const getAuthFeatureState = createFeatureSelector<auth.State>('auth');
export const getError = createSelector(getAuthFeatureState, (state) => state.error);
export const getIsLoading = createSelector(getAuthFeatureState, (state) => state.isLoading);
export const getAuthenticated = createSelector(getAuthFeatureState, (state) => state.isAuthenticated);
