import { Component, OnInit } from '@angular/core';
import { KeywordMapping } from './keyword-mapping.interface';
import { UserInput } from './user-input.interface';
import { KeywordMappingService } from './keyword-mapping.service';

@Component({
  selector: 'app-keyword-mapping',
  templateUrl: './keyword-mapping.component.html',
  styleUrls: ['./keyword-mapping.component.css']
})

export class KeywordMappingComponent implements OnInit {

	userInput: UserInput = new UserInput('', '', '');
  keywordMapping: KeywordMapping = new KeywordMapping();
  errorMessage: string = 'WARNING: at least one of your input words is not included in the model.';
  showError = false;

  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [
    {data: []}
  ];
  public barChartLabels: string[] = [];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
  	responsive: true,
  };

  constructor(private mappingService: KeywordMappingService) {
  }

  ngOnInit() {
		this.barChartLabels.length = 1;
  }

  stringToArray(input){
    var words = input.split(',');
    return words.map(x => x.trim())
  }

  transformInput(){
    this.keywordMapping.keywords = this.stringToArray(this.userInput.keywordString);
    this.keywordMapping.left = this.stringToArray(this.userInput.leftString);
    this.keywordMapping.right = this.stringToArray(this.userInput.rightString);
  }

  onGetMapping() {
    this.transformInput();
  	this.mappingService.getKeywordMapping(this.keywordMapping)
  		.subscribe(
				(data: any) => {
          this.barChartLabels = this.keywordMapping.keywords;
          this.barChartData = [{data: data.mapping, label: ""}];
          this.showError = false;
        },
        error => {
          console.log('Mapping Service ERROR:', error);
          this.showError = true;
        },
  		);
  	}

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  onGetGenderMapping(){
    this.userInput.keywordString = 'professor, programmer, secretary, doctor, artist, nurse';
    this.userInput.leftString = 'woman, female';
    this.userInput.rightString = 'man, male';
    this.onGetMapping()
  }

  onGetColorMapping(){
    this.userInput.keywordString = 'red, green, blue, yellow, black, white';
    this.userInput.leftString = 'positive';
    this.userInput.rightString = 'negative';
    this.onGetMapping()
  }

  reset(){
    this.userInput.keywordString = '';
    this.userInput.leftString = '';
    this.userInput.rightString = '';
  }

}
