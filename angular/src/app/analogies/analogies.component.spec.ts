import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { AnalogiesComponent } from './analogies.component';
import { AnalogyService } from '../data/analogy.service';
import { Analogy } from '../data/analogy.interface';


describe('AnalogiesComponent', () => {

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
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two analogies', () =>{
    const mock = [new Analogy(), new Analogy()];
    spyOn(service, 'getAnalogies').and.returnValue(of(mock));
    fixture.detectChanges();
    component.generateAnalogies();
    expect(component.analogies.length).toBe(2);
  });

});
