import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../services/data/person';

@Component({
  selector: 'app-person-display',
  templateUrl: './person-display.component.html',
  styleUrls: ['./person-display.component.scss']
})
export class PersonDisplayComponent implements OnInit {
  @Input() person: Person;
  
  constructor() { }

  ngOnInit(): void {
  }

}
