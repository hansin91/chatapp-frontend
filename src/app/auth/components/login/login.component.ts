import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	@Input() errorMessage: string;
	@Input() isLoading: boolean;
	@Output() login = new EventEmitter<User>();
	user: User | null;
	constructor(private router: Router) {
		this.initForm();
	}

	ngOnInit() {}

	get f() {
		return this.loginForm.controls;
	}

	initForm() {
		this.loginForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	loginUser() {
		const u = { ...this.user, ...this.loginForm.value };
		this.login.emit(u);
	}
}
