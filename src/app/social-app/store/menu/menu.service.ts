import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';
import { Menu } from './menu.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MenuService {
	private menuUrl = environment.apiUrl + 'menu';

	constructor(private http: HttpClient, private tokenService: TokenService) {}
	private token = this.tokenService.getToken();
	private headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.token });

	getSideMenu(): Observable<Menu[]> {
		return this.http.get<Menu[]>(this.menuUrl + '/side', { headers: this.headers });
	}
}
