import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Http  } from '@angular/http';
import { config } from '../config';
import { PULL_ACTIVITIES , GOT_ACTIVITIES } from '../actions';
import Activity from '../models/Activity'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";


@Injectable()
export class programsEffects {

  constructor(private action$: Actions , private http : Http) { }

  @Effect() pullPrograms$ = this.action$
  .ofType(PULL_ACTIVITIES)
  .switchMap( () => {
    return this.http.get('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel2/' , config)
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

}
