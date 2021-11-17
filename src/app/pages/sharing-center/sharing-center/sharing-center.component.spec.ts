import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingCenterComponent } from './sharing-center.component';

describe('SharingCenterComponent', () => {
  let component: SharingCenterComponent;
  let fixture: ComponentFixture<SharingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
