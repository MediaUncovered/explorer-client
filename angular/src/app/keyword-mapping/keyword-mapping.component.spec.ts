import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordMappingComponent } from './keyword-mapping.component';

describe('KeywordMappingComponent', () => {
  let component: KeywordMappingComponent;
  let fixture: ComponentFixture<KeywordMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
