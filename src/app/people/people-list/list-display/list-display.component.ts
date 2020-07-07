import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../services/data/person';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  @Input() people$: Observable<Person[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
