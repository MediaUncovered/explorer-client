import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogiesComponent } from './analogies.component';

describe('AnalogiesComponent', () => {
  let component: AnalogiesComponent;
  let fixture: ComponentFixture<AnalogiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
