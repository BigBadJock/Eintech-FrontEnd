import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerEntityService } from 'src/app/customers/services/data/customer-entity.service';
import { Customer } from 'src/app/customers/services/data/customer';

@Component({
  selector: 'app-add-customer-shell',
  templateUrl: './add-customer-shell.component.html',
  styleUrls: ['./add-customer-shell.component.scss']
})
export class AddCustomerShellComponent implements OnInit {

  constructor(private entityService: CustomerEntityService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitted(form: any) {
    const customer: Customer = {
      firstName: form.firstName,
      lastName: form.lastName,
    }
    this.entityService.add(customer).subscribe(
      () => {
        this.router.navigateByUrl('/Customer');
      }
    );

  }

}
