import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Http  } from '@angular/http';
import { config } from '../config';
import { PULL_PROGRAMS , GOT_PROGRAMS } from '../actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";

import Program from "../models/Program";

@Injectable()
export class programsEffects {

  constructor(private action$: Actions , private http : Http) { }

  @Effect() pullPrograms$ = this.action$
  .ofType(PULL_PROGRAMS)
  .switchMap( () => {
    return this.http.get('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel1/' , config)
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
  .switchMap(result =>
        Observable.of({type: GOT_PROGRAMS, payload: {pulledArray:  result}})
  )
  })

}
