import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonDisplayComponent } from './add-person-display.component';

describe('AddPersonDisplayComponent', () => {
  let component: AddPersonDisplayComponent;
  let fixture: ComponentFixture<AddPersonDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
