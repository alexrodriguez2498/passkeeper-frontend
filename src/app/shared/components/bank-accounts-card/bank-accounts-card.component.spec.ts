import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsCardComponent } from './bank-accounts-card.component';

describe('BankAccountsCardComponent', () => {
  let component: BankAccountsCardComponent;
  let fixture: ComponentFixture<BankAccountsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
