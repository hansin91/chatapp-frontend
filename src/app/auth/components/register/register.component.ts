import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	@Input() errorMessage: string;
	@Input() isLoading: boolean;
	@Output() register = new EventEmitter<User>();

	user: User | null;
	constructor() {
		this.initForm();
	}

	initForm() {
		this.registerForm = new FormGroup({
			username: new FormControl('', [ Validators.required, Validators.minLength(8) ]),
			email: new FormControl('', [ Validators.required, Validators.email ]),
			password: new FormControl('', [ Validators.required, Validators.minLength(8) ])
		});
	}

	get f() {
		return this.registerForm.controls;
	}

	ngOnInit() {}

	save() {
		const u = { ...this.user, ...this.registerForm.value };
		this.register.emit(u);
	}
}
