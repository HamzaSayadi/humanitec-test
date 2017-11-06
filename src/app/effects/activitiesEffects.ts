import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Http  } from '@angular/http';
import { config } from '../config';
import { PULL_ACTIVITIES , GOT_ACTIVITIES , DELETE_ACTIVITY , ACTIVITY_DELETED } from '../actions';
import Activity from '../models/Activity'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";


@Injectable()
export class activityEffects {

  activtyIdInProgress : number ;
  constructor(private action$: Actions , private http : Http) { }

  @Effect() pullactivities$ = this.action$
  .ofType(PULL_ACTIVITIES)
  .switchMap( () => {
    return this.http.get('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel2/' , {headers : config})
        .map((res) =>
          res.json().map(item => {
            return new Activity(
              item.id,
              item.url,
              item.name,
              item.workflowlevel1,
              item.expected_start_date,
              item.expected_end_date,
              item.actual_start_date,
              item.actual_end_date,
              item.description,
              item.short_name,
              item.create_date,
              item.edit_date,
              item.status,
              item.progress
            )
          }
          )
        )
  .switchMap(result =>
        Observable.of({type: GOT_ACTIVITIES, payload: {pulledArray:  result}})
  )
  })

  @Effect() deleteActivity$ = this.action$
  .ofType(DELETE_ACTIVITY)
  .switchMap( action => {
    return this.http.delete('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel2/'+action.payload.activityId , {headers : config})
        .map((res) =>
        this.activtyIdInProgress = action.payload.activityId
  )
  .switchMap((result) => {
        console.log(result)
        return Observable.of({type: ACTIVITY_DELETED, payload: {activityId : this.activtyIdInProgress}})
      }
  )
  })

}
