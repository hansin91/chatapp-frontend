import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthTabsComponent } from './container/auth-tabs/auth-tabs.component';
import { AuthGuard } from './auth.guard';

const authRoutes: Routes = [
	{
		path: 'login',
		component: AuthTabsComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: 'register',
		component: AuthTabsComponent,
		canActivate: [ AuthGuard ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(authRoutes) ],
	exports: [ RouterModule ]
})
export class AuthRoutingModule {}
