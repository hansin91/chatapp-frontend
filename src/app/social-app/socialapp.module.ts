import { NgModule } from '@angular/core';
import { SocialAppComponent } from './container/social-app/social-app.component';
import { SocialAppRoutingModule } from './socialapp-routing.module';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideComponent } from './components/side/side.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
	declarations: [ SocialAppComponent, ToolbarComponent, SideComponent, PostFormComponent, PostsComponent ],
	exports: [ SocialAppComponent, ToolbarComponent, SideComponent ],
	imports: [ SocialAppRoutingModule, CommonModule ]
})
export class SocialAppModule {}
