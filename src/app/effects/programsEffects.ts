import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Http  } from '@angular/http';
import { config } from '../config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Observable } from "rxjs";

@Injectable()
export class programsEffects {

  constructor(private action$: Actions , private http : Http) { }

  @Effect() pullPrograms$ = this.action$
  .ofType('PULL_PROGRAMS')
  .switchMap( () => {
    return this.http.get('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel1/' , config)
        .map((res) =>
          res.json().map(item => {
            return new Program(
              item.id,
              item.name,
              item.email
            )
          }
          )
        )
  .switchMap(result =>
        Observable.of({type: "GOT_PROGRAMS", payload: {pulledArray:  result}})
  )
  })


    @Effect() PostAPI$ = this.action$
    .ofType('GET_FACTS')
    .switchMap( (action) => {
      return this.http.get('http://numbersapi.com/'+ action.payload +'/trivia?notfound=floor&fragment')
    .map((res) => res)
    .switchMap(result =>
          Observable.of({type: "GOT_FACTS", payload: result})
    )
    })

}
