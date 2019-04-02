import { Action } from '@ngrx/store';
import { User } from '../models/user';

export enum AuthActionTypes {
	Register = '[Auth] Register',
	RegisterSuccess = '[Auth] Register Success',
	RegisterFailed = '[Auth] Register Failed',
	Login = '[Auth] Login',
	LoginSuccess = '[Auth] Login Success',
	LoginFailed = '[Auth] Login Failed',
	Authenticate = '[Auth] Authenticate',
	AuthenticateFailed = '[Auth] Authenticate Failed',
	AuthenticateSuccess = '[Auth] Authenticate Success',
	Logout = '[Auth] Logout',
	LogoutSuccess = '[Auth] Logout Success',
	LogoutFailed = '[Auth] Logout Failed'
}

export class Register implements Action {
	readonly type = AuthActionTypes.Register;
	constructor(public payload: User) {}
}

export class RegisterSuccess implements Action {
	readonly type = AuthActionTypes.RegisterSuccess;
	constructor(public payload: User) {}
}

export class RegisterFailed implements Action {
	readonly type = AuthActionTypes.RegisterFailed;
	constructor(public payload: any) {}
}

export class Login implements Action {
	readonly type = AuthActionTypes.Login;
	constructor(public payload: User) {}
}

export class LoginFailed implements Action {
	readonly type = AuthActionTypes.LoginFailed;
	constructor(public payload: any) {}
}

export class LoginSucces implements Action {
	readonly type = AuthActionTypes.LoginSuccess;
	constructor(public payload: any) {}
}

export class Authenticated implements Action {
	readonly type = AuthActionTypes.Authenticate;
	constructor(public payload: any) {}
}

export class AuthenticatedSucces implements Action {
	readonly type = AuthActionTypes.AuthenticateSuccess;
	constructor(public payload: any) {}
}

export class AuthenticatedFailed implements Action {
	readonly type = AuthActionTypes.AuthenticateFailed;
	constructor(public payload: any) {}
}

export class Logout implements Action {
	readonly type = AuthActionTypes.Logout;
}

export class LogoutFailed implements Action {
	readonly type = AuthActionTypes.LogoutFailed;
	constructor(public payload: any) {}
}

export class LogoutSuccess implements Action {
	readonly type = AuthActionTypes.LogoutSuccess;
	constructor(public payload: any) {}
}

export type AuthActions =
	| Register
	| RegisterFailed
	| RegisterSuccess
	| Login
	| LoginSucces
	| LoginFailed
	| Authenticated
	| AuthenticatedFailed
	| AuthenticatedSucces
	| Logout
	| LogoutFailed
	| LogoutSuccess;
