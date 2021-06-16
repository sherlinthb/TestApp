import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTipsComponent } from './section-tips.component';

describe('SectionTipsComponent', () => {
  let component: SectionTipsComponent;
  let fixture: ComponentFixture<SectionTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
