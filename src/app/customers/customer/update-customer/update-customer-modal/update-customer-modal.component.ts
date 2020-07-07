import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerEntityService } from 'src/app/customers/services/data/customer-entity.service';
import { Customer } from 'src/app/customers/services/data/customer';
import { Observable } from 'rxjs';
import { map, first, filter } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-customer-modal',
  templateUrl: './update-customer-modal.component.html',
  styleUrls: ['./update-customer-modal.component.scss']
})
export class UpdateCustomerModalComponent implements OnInit {
  @Input() customer: Customer;
  constructor( public activeModal: NgbActiveModal, private entityService: CustomerEntityService) { }

  ngOnInit(): void {
  }

}
