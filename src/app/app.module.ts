import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { mainReducer } from './reducers/mainReducer';
import { programsEffects } from './effects/programsEffects';
import { activityEffects }  from './effects/activitiesEffects';
import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { ActivityComponent } from './activity/activity.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesService } from './services/activities.service'
import { ProgramsService } from './services/programs.service'

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({mainReducer}),
    EffectsModule.run(programsEffects),
    EffectsModule.run(activityEffects),
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ ActivitiesService , ProgramsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
