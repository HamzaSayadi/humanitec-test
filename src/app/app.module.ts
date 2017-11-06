import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { programsReducer } from './reducers/programsReducer'
import { programsEffects } from './effects/programsEffects'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({programsReducer}),
    EffectsModule.run(programsEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
