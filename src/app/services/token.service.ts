import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TokenService {
	constructor(private cookieService: CookieService) {}

	setToken(token) {
		this.cookieService.set('token', token);
	}

	getToken() {
		return this.cookieService.get('token');
	}

	deleteToken(): Observable<boolean> {
		this.cookieService.delete('token');
		return of(true);
	}
}
