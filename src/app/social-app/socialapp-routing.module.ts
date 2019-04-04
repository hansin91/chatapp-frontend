import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAppComponent } from './container/social-app/social-app.component';
import { SocialAppGuard } from './socialapp.guard';

const routes: Routes = [
	{
		path: '',
		component: SocialAppComponent,
		canActivate: [ SocialAppGuard ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	providers: [ SocialAppGuard ]
})
export class SocialAppRoutingModule {}
