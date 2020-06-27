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

  input: WordPair = {'a':'', 'b':''};
  analogies: Analogy[] = [];
  hasError = false;
  errorMessage: string = 'INFO: No analogies found.';

  ngOnInit() {
  }

  generateAnalogies(){
    this.analogyService.getAnalogies(this.input)
    .subscribe(
      (data: any) => {
        this.analogies = data;
				this.hasError = false;
      },
      error => {
        console.log('ERROR: ', error);
				this.analogies = [];
        this.hasError = true;
      }
    )
  }

}
