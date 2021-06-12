import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerByUraComponent } from './customer-by-ura.component';

describe('CustomerByUraComponent', () => {
  let component: CustomerByUraComponent;
  let fixture: ComponentFixture<CustomerByUraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerByUraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerByUraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
