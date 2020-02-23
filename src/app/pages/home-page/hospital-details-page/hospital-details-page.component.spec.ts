import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDetailsPageComponent } from './hospital-details-page.component';

describe('HospitalDetailsPageComponent', () => {
  let component: HospitalDetailsPageComponent;
  let fixture: ComponentFixture<HospitalDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
