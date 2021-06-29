import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBodyComponent } from './information-body.component';

describe('InformationBodyComponent', () => {
  let component: InformationBodyComponent;
  let fixture: ComponentFixture<InformationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
