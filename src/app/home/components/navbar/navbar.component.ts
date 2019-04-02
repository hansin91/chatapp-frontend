import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		document.addEventListener('DOMContentLoaded', () => {
			const elems = document.querySelectorAll('.sidenav');
			const instances = M.Sidenav.init(elems, {});
		});
	}
}
