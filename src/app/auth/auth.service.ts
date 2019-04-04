import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { TokenService } from '../services/token.service';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private authUrl = environment.apiUrl + 'user';
	constructor(private http: HttpClient, private tokenService: TokenService) {}
	private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

	register(user: User): Observable<User> {
		return this.http.post<User>(this.authUrl + '/register', user, { headers: this.headers });
	}

	login(user: User): Observable<User> {
		return this.http.post<User>(this.authUrl + '/login', user, { headers: this.headers });
	}

	isAuthenticated(payload: any): any {
		return this.http.post<User>(this.authUrl + '/validate', payload, { headers: this.headers });
	}

	logout(): Observable<boolean> {
		return this.tokenService.deleteToken();
	}
}
