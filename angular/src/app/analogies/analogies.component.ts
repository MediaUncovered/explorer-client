import { Component, OnInit } from '@angular/core';
import { WordPair } from '../data/wordpair.interface';
import { AnalogyService } from '../data/analogy.service';
import { Analogy } from '../data/analogy.interface';

@Component({
  selector: 'app-analogies',
  templateUrl: './analogies.component.html',
  styleUrls: ['./analogies.component.css']
})
export class AnalogiesComponent implements OnInit {

  constructor(private analogyService: AnalogyService) { }

  input: WordPair = new WordPair();
  analogies: Analogy[];
  hasError = false;
  errorMessage: string = 'WARNING: at least one of your input words is not included in the model.';

  ngOnInit() {
  	this.input.a = 'a';
  	this.input.b = 'b';
    this.analogies = [ new Analogy()];
  }

  generateAnalogies(){
    console.log(this.analogies.length);
    this.analogyService.getAnalogies(this.input)
    .subscribe(
      (data: any) => {
        this.analogies = data;
      },
      error => {
        console.log('ERROR: ', error);
        this.hasError = true;
      }
    )
  }

}
