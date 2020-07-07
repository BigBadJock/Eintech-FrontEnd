import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonShellComponent } from './add-person-shell.component';

describe('AddPersonShellComponent', () => {
  let component: AddPersonShellComponent;
  let fixture: ComponentFixture<AddPersonShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
