import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../store/menu/menu.model';

@Component({
	selector: 'app-side',
	templateUrl: './side.component.html',
	styleUrls: [ './side.component.scss' ]
})
export class SideComponent implements OnInit {
	@Input() sideMenus: Menu[];
	constructor() {}

	ngOnInit() {}
}
