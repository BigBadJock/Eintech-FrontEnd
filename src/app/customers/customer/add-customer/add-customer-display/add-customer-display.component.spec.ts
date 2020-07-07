import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerDisplayComponent } from './add-customer-display.component';

describe('AddCustomerDisplayComponent', () => {
  let component: AddCustomerDisplayComponent;
  let fixture: ComponentFixture<AddCustomerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
