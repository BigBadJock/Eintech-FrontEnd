import { Component, OnInit, Input } from '@angular/core';
import { CustomerEntityService } from 'src/app/customers/services/data/customer-entity.service';
import { Customer } from 'src/app/customers/services/data/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-customer-modal',
  templateUrl: './update-customer-modal.component.html',
  styleUrls: ['./update-customer-modal.component.scss']
})
export class UpdateCustomerModalComponent implements OnInit {
  @Input() customer: Customer;
  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private entityService: CustomerEntityService,) { 
     this.form = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', Validators.required]
      }
    );   
  }

  ngOnInit(): void {
    this.form.patchValue({
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
    });
  }

   onSubmit() {
    if (!this.form.valid) return;

    let customer: Customer = {
      ...this.customer,
      ...this.form.value
    };

    this.entityService.update(customer);
    this.activeModal.close();
  }

  
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

}
