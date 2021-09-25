import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportDocumentsComponent } from './passport-documents.component';

describe('PassportDocumentsComponent', () => {
  let component: PassportDocumentsComponent;
  let fixture: ComponentFixture<PassportDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
