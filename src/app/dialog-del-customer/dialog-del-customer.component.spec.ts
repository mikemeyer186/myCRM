import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDelCustomerComponent } from './dialog-del-customer.component';

describe('DialogDelCustomerComponent', () => {
  let component: DialogDelCustomerComponent;
  let fixture: ComponentFixture<DialogDelCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDelCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDelCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
