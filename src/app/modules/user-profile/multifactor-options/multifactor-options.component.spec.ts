import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifactorOptionsComponent } from './multifactor-options.component';

describe('MultifactorOptionsComponent', () => {
  let component: MultifactorOptionsComponent;
  let fixture: ComponentFixture<MultifactorOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultifactorOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultifactorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
