import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit {
	@Input() isAuthenticated: boolean;
	@Output() logout = new EventEmitter<void>();
	constructor() {}

	ngOnInit() {
		console.log(this.isAuthenticated);
	}

	logoutUser() {
		this.logout.emit();
	}
}
