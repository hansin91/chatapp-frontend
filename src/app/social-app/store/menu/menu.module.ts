import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './menu.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './menu.effects';
import { MenuService } from './menu.service';

@NgModule({
	imports: [ StoreModule.forFeature('menus', reducer), EffectsModule.forFeature([ MenuEffects ]) ],
	providers: [ MenuService ]
})
export class MenuModule {}
