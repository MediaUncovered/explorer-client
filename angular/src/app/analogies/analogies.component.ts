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
  hasAnalogies = false;

  ngOnInit() {
  	this.input.a = 'a';
  	this.input.b = 'b';
  }

  generateAnalogies(){
    this.analogyService.getAnalogies(this.input)
    .subscribe(
      (data: any) => {
        this.hasAnalogies = true;
        this.analogies = data;
      },
      error => {
        console.log('ERROR: ', error);
      }
    )
  }

}
