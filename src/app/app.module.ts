import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { mainReducer } from './reducers/mainReducer';
import { programsEffects } from './effects/programsEffects';
import { activityEffects }  from './effects/activitiesEffects';
import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({mainReducer}),
    EffectsModule.run(programsEffects),
    EffectsModule.run(activityEffects),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
