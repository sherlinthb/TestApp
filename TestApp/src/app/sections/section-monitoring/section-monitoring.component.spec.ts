import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMonitoringComponent } from './section-monitoring.component';

describe('SectionMonitoringComponent', () => {
  let component: SectionMonitoringComponent;
  let fixture: ComponentFixture<SectionMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
