import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseDetailPageComponent } from './nurse-detail-page.component';

describe('NurseDetailPageComponent', () => {
  let component: NurseDetailPageComponent;
  let fixture: ComponentFixture<NurseDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
