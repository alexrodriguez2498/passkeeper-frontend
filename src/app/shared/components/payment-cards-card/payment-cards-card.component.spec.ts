import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardsCardComponent } from './payment-cards-card.component';

describe('PaymentCardsCardComponent', () => {
  let component: PaymentCardsCardComponent;
  let fixture: ComponentFixture<PaymentCardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
