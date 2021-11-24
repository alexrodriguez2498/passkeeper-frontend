import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesCardComponent } from './addresses-card.component';

describe('AddressesCardComponent', () => {
  let component: AddressesCardComponent;
  let fixture: ComponentFixture<AddressesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
