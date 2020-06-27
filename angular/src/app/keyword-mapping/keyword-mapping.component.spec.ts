import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { KeywordMappingComponent } from './keyword-mapping.component';
import { KeywordMappingService } from './keyword-mapping.service';
//import { Analogy } from '../data/analogy.interface';


describe('KeywordMappingComponent', () => {

    // const mockEmptyAnalogies = [];
    // const mockTwoAnalogies = [new Analogy('x1','y1',0.82), new Analogy('x2','y2',0.34)];

    let component: KeywordMappingComponent;
    let service: KeywordMappingService;
    let fixture: ComponentFixture<KeywordMappingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [KeywordMappingComponent],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ChartsModule
            ],
            providers: [
                KeywordMappingService,
            ]
        });
        fixture = TestBed.createComponent(KeywordMappingComponent);
        component = fixture.debugElement.componentInstance;
        service = TestBed.get(KeywordMappingService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be an empty string', () => {
        expect(component.userInput.keywordString).toBeTruthy();
        expect(component.userInput.keywordString).toEqual('a');
    });

    // it('should transform keyword string in keywords array', () => {
    //     component.userInput.keywordString = 'w1, w2, w3';
    //     component.transfromInput();
    //     fixture.detectChanges();
    //     expect(component.keywordMapping.keywords).toBe(['w1', 'w2']);
    // });

    // it('should transform keyword string in keywords array with length 2', () => {
    //     component.userInput.keywordString = 'word1, word2';
    //     component.splitInputToArray();
    //     expect(component.keywordMapping.keywords.length).toBe(2);
    // });
  // it('should have more analogies with at least one element', () =>{
  //   expect(component.analogies.length).toBeGreaterThan(0);
  // });

  // it('should have two analogies', () =>{
  //   spyOn(service, 'getAnalogies').and.returnValue(of(mockTwoAnalogies));
  //   component.generateAnalogies();
  //   expect(component.analogies.length).toBe(2);
  // });

  // it('should not have an the error if two analogies are obtained', () =>{
  //   spyOn(service, 'getAnalogies').and.returnValue(of(mockTwoAnalogies));
  //   component.generateAnalogies();
  //   expect(component.hasError).toBe(false);
  // });

  // it('should have zero analogies', () =>{
  //   spyOn(service, 'getAnalogies').and.returnValue(of(mockEmptyAnalogies));
  //   component.generateAnalogies();
  //   expect(component.analogies.length).toBe(0);
  // });

  // it('should not have an error if no analogies are obtained', () =>{
  //   spyOn(service, 'getAnalogies').and.returnValue(of(mockEmptyAnalogies));
  //   component.generateAnalogies();
  //   expect(component.hasError).toBe(false);
  // });


});
