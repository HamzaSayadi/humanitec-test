import { Component, OnChanges, OnInit, Input} from '@angular/core';
import Activity from "../models/Activity";
import { Store } from '@ngrx/store';


import {AppState} from '../reducers/mainReducer';
import { DELETE_ACTIVITY } from '../actions'

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass']
})

export class ActivityComponent implements OnChanges, OnInit {
  @Input() activity: Activity;


  constructor(private store: Store<AppState>) {
    store.select<AppState>('mainReducer')
  }

  removeActivty(activityId) {
    console.log(activityId)
    this.store.dispatch({type : DELETE_ACTIVITY , payload : {activityId}})
  }

  ngOnChanges() {

  }

  ngOnInit() {

  }

  add() {
    this.store.dispatch({ type: 'ADD_ACTIVITY', payload: {
        "name": "paptoss",
        "workflowlevel1": "http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel1/115/",
        "expected_start_date": new Date(),
        "expected_end_date": new Date()
      } });
  }
}
