import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAppComponent } from './container/social-app/social-app.component';
import { SocialAppGuard } from './socialapp.guard';

const socialAppRoutes: Routes = [
	{
		path: 'socialapp',
		component: SocialAppComponent,
		canActivate: [ SocialAppGuard ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(socialAppRoutes) ],
	exports: [ RouterModule ]
})
export class SocialAppRoutingModule {}
