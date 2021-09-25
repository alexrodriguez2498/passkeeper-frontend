import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingAccountsComponent } from './messaging-accounts.component';

describe('MessagingAccountsComponent', () => {
  let component: MessagingAccountsComponent;
  let fixture: ComponentFixture<MessagingAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
