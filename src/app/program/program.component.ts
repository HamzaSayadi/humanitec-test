import { Component, OnInit , Input } from '@angular/core';
import  Program  from '../models/Program';
import Activity from "../models/Activity";
import { Store } from '@ngrx/store';
import {AppState} from '../reducers/mainReducer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.sass']
})
export class ProgramComponent implements OnInit {
  @Input() program : Program ;
  name : string;
  startdate : string;
  enddate : string;
  rForm: FormGroup;
  constructor(private store: Store<AppState> , private fb: FormBuilder) {
    store.select<AppState>('mainReducer')
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'startdate' : [null ,  Validators.nullValidator],
      'enddate' : [null ,  Validators.nullValidator]
    });
  }

  ngOnInit() {
  }

  add(value) {

    this.store.dispatch({ type: 'ADD_ACTIVITY', payload: {
        "name": value.name,
        "workflowlevel1": this.program.url,
        "expected_start_date": new Date(value.startdate),
        "expected_end_date": new Date(value.enddate)
      } });
  }

}
