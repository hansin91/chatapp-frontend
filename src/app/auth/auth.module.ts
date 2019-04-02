import { NgModule } from '@angular/core';
import { AuthTabsComponent } from './container/auth-tabs/auth-tabs.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { reducer } from './store/auth.reducers';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { TokenService } from '../services/token.service';

@NgModule({
	declarations: [ AuthTabsComponent, LoginComponent, RegisterComponent, ToolbarComponent, RegisterSuccessComponent ],
	imports: [
		AuthRoutingModule,
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		StoreModule.forFeature('auth', reducer),
		EffectsModule.forFeature([ AuthEffects ])
	],
	providers: [ TokenService ]
})
export class AuthModule {}
