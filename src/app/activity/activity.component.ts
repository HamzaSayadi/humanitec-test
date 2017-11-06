import { Component, OnChanges, OnInit, Input} from '@angular/core';
import Activity from "../models/Activity";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass']
})

export class ActivityComponent implements OnChanges, OnInit {
  @Input() activity: Activity;

  constructor() {
  }

  ngOnChanges() {

  }

  ngOnInit() {

  }
}
