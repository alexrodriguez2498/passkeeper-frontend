import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedDevicesComponent } from './trusted-devices.component';

describe('TrustedDevicesComponent', () => {
  let component: TrustedDevicesComponent;
  let fixture: ComponentFixture<TrustedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
