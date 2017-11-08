import { Component , OnInit } from '@angular/core';
import Activity from './models/Activity'
import Program from './models/Program'
import { Store } from '@ngrx/store';
import {AppState} from './reducers/mainReducer';
import { environment } from '../environments/environment';

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
  messages : object[];

  constructor(private store: Store<AppState>){
    this.programs = []
    this.activities = []
    this.messages = []
    store.select<AppState>('mainReducer').subscribe((value) => {

      this.programs = value.programs
      this.activities = value.activities

      if ( value.flashMessage !== undefined && value.flashMessage !== "" ) {
        this.messages.push({id : this.messages.length + 1  , message : value.flashMessage , type : "info"})
      }

      this.programs.map((program) => {
        program.activties = [];
        program.activties = this.activities.filter((activity) => {
          return (activity.workflowlevel1 === program.url)
        });
      });
    });
  }

  ngOnInit() {

      this.store.dispatch({ type: 'PULL_PROGRAMS' });
      this.store.dispatch({ type: 'PULL_ACTIVITIES' });
  }

  public closeAlert(message) {
    const index: number = this.messages.indexOf(message);
    this.messages.splice(index, 1);
  }
}
