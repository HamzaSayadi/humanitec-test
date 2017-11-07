import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Http } from '@angular/http';
import { config } from '../config';
import { PULL_PROGRAMS, GOT_PROGRAMS, PULL_PROGRAMS_NET_ERROR } from '../actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";

import Program from "../models/Program";

@Injectable()
export class programsEffects {

  constructor(private action$: Actions, private http: Http) { }

  @Effect() pullPrograms$ = this.action$
    .ofType(PULL_PROGRAMS)
    .switchMap(() => {
      return this.http.get('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel1/', { headers: config })
        .map((res) =>
          res.json().map(item => {
            return new Program(
              item.url,
              item.id,
              item.status,
              item.name,
              item.description,
              item.start_date,
              item.end_date,
              item.create_date,
              item.edit_date,
              item.organization,
              []
            )
          }
          )
        )
        .switchMap((result) => {
          localStorage.setItem('programs', JSON.stringify(result));
          return Observable.of({ type: GOT_PROGRAMS, payload: { pulledArray: result } })
        })
        .catch((error) => {
          const programs = JSON.parse(localStorage.getItem('programs'));
          console.log('from cache : ' ,programs)
          if ( programs !== null) {
              return Observable.of({ type: GOT_PROGRAMS, payload: { pulledArray: programs } })
          }
          return Observable.of({ type: PULL_PROGRAMS_NET_ERROR, payload: error })
        })
  })

}
