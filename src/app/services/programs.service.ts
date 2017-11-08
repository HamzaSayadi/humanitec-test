import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Program from '../models/Program';
import { config } from '../config';

@Injectable()
export class ProgramsService {

  constructor(private http: Http) { }

  getPrograms() {
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
      ))
  }
}
