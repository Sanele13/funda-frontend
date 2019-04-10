import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuecardsComponent } from './cuecards.component';

describe('CuecardsComponent', () => {
  let component: CuecardsComponent;
  let fixture: ComponentFixture<CuecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
