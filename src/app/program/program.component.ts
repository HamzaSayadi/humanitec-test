import { Component, OnInit , Input } from '@angular/core';
import  Program  from '../models/Program';

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.sass']
})
export class ProgramComponent implements OnInit {
  @Input() program : Program ;
  constructor() { }

  ngOnInit() {
  }

}
