import { AuthActions, AuthActionTypes, AuthenticatedFailed } from './auth.actions';
import { User } from '../models/user';

export interface State {
	users: User[];
	error: string;
	isLoading: boolean;
	isAuthenticated: boolean;
}

const initialState: State = {
	users: [],
	error: '',
	isLoading: null,
	isAuthenticated: false
};

export function reducer(state = initialState, action: AuthActions): State {
	switch (action.type) {
		case AuthActionTypes.Login:
			return {
				...state,
				isLoading: true
			};
		case AuthActionTypes.LoginSuccess:
			return {
				...state,
				error: '',
				isLoading: false,
				isAuthenticated: true
			};
		case AuthActionTypes.LoginFailed:
			return {
				...state,
				error: action.payload.error.message,
				isLoading: false,
				isAuthenticated: false
			};
		case AuthActionTypes.Register:
			return {
				...state,
				isLoading: true
			};
		case AuthActionTypes.RegisterFailed:
			return {
				...state,
				users: [],
				error: action.payload.error.message,
				isLoading: false
			};
		case AuthActionTypes.RegisterSuccess:
			return {
				...state,
				users: [ ...state.users, action.payload ],
				error: '',
				isLoading: false
			};
		case AuthActionTypes.Authenticate:
			return {
				...state,
				isAuthenticated: false
			};
		case AuthActionTypes.AuthenticateFailed:
			console.log(action.payload);
			return {
				...state,
				isAuthenticated: false
			};
		case AuthActionTypes.AuthenticateSuccess:
			console.log(action.payload);
			return {
				...state,
				isAuthenticated: true
			};
		case AuthActionTypes.Logout:
			return {
				...state,
				isAuthenticated: false
			};
		case AuthActionTypes.LogoutFailed:
			return {
				...state,
				isAuthenticated: true,
				error: action.payload.error
			};
		case AuthActionTypes.LogoutSuccess:
			return {
				...state,
				isAuthenticated: false
			};
		default:
			return state;
	}
}
