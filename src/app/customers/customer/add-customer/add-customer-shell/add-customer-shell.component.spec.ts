import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerShellComponent } from './add-customer-shell.component';

describe('AddCustomerShellComponent', () => {
  let component: AddCustomerShellComponent;
  let fixture: ComponentFixture<AddCustomerShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
