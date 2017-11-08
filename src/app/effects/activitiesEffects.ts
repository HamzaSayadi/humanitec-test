import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Http } from '@angular/http';
import { config } from '../config';
import { PULL_ACTIVITIES, GOT_ACTIVITIES,
         ADD_ACTIVITY, ADDED_ACTIVITY,
         DELETE_ACTIVITY, ACTIVITY_DELETED ,
         PULL_ACTIVITIES_NET_ERROR} from '../actions/activitiesActions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { ActivitiesService } from "../services/activities.service"

@Injectable()
export class activityEffects {

  activtyIdInProgress: number;
  constructor(private action$: Actions, private http: Http , private activitiesService : ActivitiesService) { }

  @Effect() pullactivities$ = this.action$
    .ofType(PULL_ACTIVITIES)
    .switchMap((action , index) => {
        return this.activitiesService.getActivities()
        .switchMap((result) => {
          localStorage.setItem('activities', JSON.stringify(result));
          return Observable.of({ type: GOT_ACTIVITIES, payload: { pulledArray: result } }
          )})
        .catch((error) => {
          const actvivities = JSON.parse(localStorage.getItem('activities'));
          if ( actvivities !== null) {
              return Observable.of({ type: GOT_ACTIVITIES, payload: { pulledArray: actvivities } })
          }
          return Observable.of({ type: PULL_ACTIVITIES_NET_ERROR, payload: error } )

        })
    })

  @Effect() addactivity$ = this.action$
    .ofType(ADD_ACTIVITY)
    .map(action => JSON.stringify(action.payload))
    .switchMap((payload) => {
        return this.activitiesService.addActivity(payload)
      })
        .switchMap(result =>
          Observable.of({ type: ADDED_ACTIVITY, payload: { pulledItem: result } })
        )


  @Effect() deleteActivity$ = this.action$
    .ofType(DELETE_ACTIVITY)
    .switchMap((action) => {
      return this.activitiesService.deleteActivity(action.payload.activityId)
        .map((res) =>
          this.activtyIdInProgress = action.payload.activityId
        )
        .switchMap((result) => {
          return Observable.of({ type: ACTIVITY_DELETED, payload: { activityId: this.activtyIdInProgress } })
        }
        )
    })

}
