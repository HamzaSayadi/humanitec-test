import { Component , OnInit } from '@angular/core';
import Activity from './models/Activity'
import Program from './models/Program'
import { Store } from '@ngrx/store';
import {AppState} from './reducers/mainReducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';

  currentValue : number;
  programs : Program[];
  activities : Activity[];

  constructor(private store: Store<AppState>){
    this.programs = []
    this.activities = []

    store.select<AppState>('mainReducer').subscribe((value) => {

      this.programs = value.programs
      this.activities = value.activities
      this.programs.forEach(program => {
        this.activities.forEach(activity => {
          if(activity.workflowlevel1 === program.url)
            program.activties.push(activity);
        });
      });
    });
  }

  ngOnInit() {

      this.store.dispatch({ type: 'PULL_PROGRAMS' });
      this.store.dispatch({ type: 'PULL_ACTIVITIES' });
  }
}
