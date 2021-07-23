import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAndTricksBodyComponent } from './tips-and-tricks-body.component';

describe('TipsAndTricksBodyComponent', () => {
  let component: TipsAndTricksBodyComponent;
  let fixture: ComponentFixture<TipsAndTricksBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsAndTricksBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsAndTricksBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
