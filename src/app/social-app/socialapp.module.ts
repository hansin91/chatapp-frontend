import { NgModule } from '@angular/core';
import { SocialAppComponent } from './container/social-app/social-app.component';
import { SocialAppRoutingModule } from './socialapp-routing.module';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideComponent } from './components/side/side.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './store/menu/menu.module';

@NgModule({
	declarations: [ SocialAppComponent, ToolbarComponent, SideComponent, PostFormComponent, PostsComponent ],
	exports: [ SocialAppComponent, ToolbarComponent, SideComponent, PostFormComponent, PostsComponent ],
	imports: [ SocialAppRoutingModule, CommonModule, ReactiveFormsModule, HttpClientModule, MenuModule ]
})
export class SocialAppModule {}
