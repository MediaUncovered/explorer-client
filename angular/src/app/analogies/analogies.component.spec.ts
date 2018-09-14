import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { AnalogiesComponent } from './analogies.component';
import { AnalogyService } from '../data/analogy.service';
import { Analogy } from '../data/analogy.interface';


describe('AnalogiesComponent', () => {

  const mockEmptyAnalogies = [];
  const mockTwoAnalogies = [new Analogy('x1','y1',0.82), new Analogy('x2','y2',0.34)];

  let component: AnalogiesComponent;
  let service: AnalogyService;
  let fixture: ComponentFixture<AnalogiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalogiesComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        AnalogyService,
      ]  
    });
    fixture = TestBed.createComponent(AnalogiesComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(AnalogyService);
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have more analogies with at least one element', () =>{
    expect(component.analogies.length).toBeGreaterThan(0);
  });

  it('should have two analogies', () =>{
    spyOn(service, 'getAnalogies').and.returnValue(of(mockTwoAnalogies));
    component.generateAnalogies();
    expect(component.analogies.length).toBe(2);
  });

  it('should not have an the error if two analogies are obtained', () =>{
    spyOn(service, 'getAnalogies').and.returnValue(of(mockTwoAnalogies));
    component.generateAnalogies();
    expect(component.hasError).toBe(false);
  });

  it('should have zero analogies', () =>{
    spyOn(service, 'getAnalogies').and.returnValue(of(mockEmptyAnalogies));
    component.generateAnalogies();
    expect(component.analogies.length).toBe(0);
  });

  it('should not have an error if no analogies are obtained', () =>{
    spyOn(service, 'getAnalogies').and.returnValue(of(mockEmptyAnalogies));
    component.generateAnalogies();
    expect(component.hasError).toBe(false);
  });


});
