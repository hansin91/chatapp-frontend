import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/container/home.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: 'socialapp',
		loadChildren: './social-app/socialapp.module#SocialAppModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
