import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../services/data/customer';
import { CustomerEntityService } from '../../services/data/customer-entity.service';

@Component({
  selector: 'app-list-shell',
  templateUrl: './list-shell.component.html',
  styleUrls: ['./list-shell.component.scss']
})
export class ListShellComponent implements OnInit {
  customer$: Observable<Customer[]>;

  constructor(private entityService: CustomerEntityService) {
    this.customer$ = entityService.entities$;
   }

  ngOnInit(): void {
  }

}
