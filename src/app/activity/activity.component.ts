import { Component, OnChanges, OnInit, Input} from '@angular/core';
import Activity from "../models/Activity";
import { Store } from '@ngrx/store';


import {AppState} from '../reducers/mainReducer';
import { DELETE_ACTIVITY } from '../actions/activitiesActions'

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

}
