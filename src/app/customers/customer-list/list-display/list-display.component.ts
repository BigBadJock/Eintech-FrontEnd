import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../services/data/customer';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  @Input() customer$: Observable<Customer[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
