import { NgModule } from '@angular/core';
import { SocialAppComponent } from './container/social-app/social-app.component';
import { SocialAppRoutingModule } from './socialapp-routing.module';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
	declarations: [ SocialAppComponent, ToolbarComponent ],
	exports: [ SocialAppComponent, ToolbarComponent ],
	imports: [ SocialAppRoutingModule, CommonModule ]
})
export class SocialAppModule {}
