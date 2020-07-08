import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../services/data/customer';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-display',
  templateUrl: './customer-display.component.html',
  styleUrls: ['./customer-display.component.scss']
})
export class CustomerDisplayComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

 


}
