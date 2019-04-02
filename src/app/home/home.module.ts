import { NgModule } from '@angular/core';

import { HomeComponent } from './container/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [ NavbarComponent, JumbotronComponent, HomeComponent ],
	imports: [ AppRoutingModule ]
})
export class HomeModule {}
