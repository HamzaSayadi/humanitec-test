import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Activity from '../models/Activity';
import { config } from '../config';



@Injectable()
export class ActivitiesService {

  constructor(private http: Http) {

  }

  addActivity(activity) {
    return this.http.post('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel2/', activity, { headers: config })
      .map((res) => {
        const item = res.json();
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
      })
  }

  deleteActivity(activityId) {
    return this.http.delete('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel2/' + activityId, { headers: config })
  }

  getActivities() {
    return this.http.get('http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel2/', { headers: config })

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
  }

}
