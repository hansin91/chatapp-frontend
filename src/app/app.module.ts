import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
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
import { SocialAppModule } from './social-app/socialapp.module';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [ storeFreeze ] : [];

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AuthModule,
		SocialAppModule,
		HomeModule,
		AppRoutingModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(effects),
		StoreRouterConnectingModule,
		environment.development ? StoreDevtoolsModule.instrument() : []
	],
	providers: [ { provide: RouterStateSerializer, useClass: CustomSerializer }, CookieService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
