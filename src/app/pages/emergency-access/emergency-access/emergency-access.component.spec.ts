import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyAccessComponent } from './emergency-access.component';

describe('EmergencyAccessComponent', () => {
  let component: EmergencyAccessComponent;
  let fixture: ComponentFixture<EmergencyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
