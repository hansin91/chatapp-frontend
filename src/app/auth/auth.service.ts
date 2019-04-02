import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { TokenService } from '../services/token.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private authUrl = 'http://localhost:3000/api/user';
	constructor(private http: HttpClient, private tokenService: TokenService) {}

	register(user: User): Observable<User> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<User>(this.authUrl + '/register', user, { headers: headers });
	}

	login(user: User): Observable<User> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<User>(this.authUrl + '/login', user, { headers: headers });
	}

	isAuthenticated(payload: any): any {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post<User>(this.authUrl + '/validate', payload, { headers: headers });
	}
}
