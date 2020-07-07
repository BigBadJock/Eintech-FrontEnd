import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer-display',
  templateUrl: './add-customer-display.component.html',
  styleUrls: ['./add-customer-display.component.scss']
})
export class AddCustomerDisplayComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', Validators.required]
      }
    );
   }

  ngOnInit(): void {
  }

  submitForm(): void{
    this.formSubmitted.emit(this.form.value);
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

}
