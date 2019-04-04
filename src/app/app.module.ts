import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, reducers, effects } from './store';
const environment = {
	development: true,
	production: false
};

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/container/home.component';
import { JumbotronComponent } from './home/components/jumbotron/jumbotron.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [ storeFreeze ] : [];

@NgModule({
	declarations: [ AppComponent, HomeComponent, JumbotronComponent, NavbarComponent ],
	imports: [
		BrowserModule,
		AuthModule,
		AppRoutingModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(effects),
		environment.development ? StoreDevtoolsModule.instrument() : []
	],
	providers: [ { provide: RouterStateSerializer, useClass: CustomSerializer }, CookieService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
