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

  userInput: UserInput = new UserInput();
  keywordMapping: KeywordMapping = new KeywordMapping();

  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [
    {data: []}
  ];
  public barChartLabels: string[] = [];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
  	responsive: true
  };

  constructor(private mappingService: KeywordMappingService) {
  }

  ngOnInit() {
    this.userInput.keywordString = 'keywords';
    this.userInput.leftString = 'left-axis';
    this.userInput.rightString = 'right-axis';
    this.barChartLabels.length = 1;
  }

  splitInputToArray(){
    this.keywordMapping.keywords = this.userInput.keywordString.split(',');
    this.keywordMapping.left = this.userInput.leftString.split(',');
    this.keywordMapping.right = this.userInput.rightString.split(',');
  }


  onGetMapping() {
    this.splitInputToArray();
  	this.mappingService.getKeywordMapping(this.keywordMapping)
  		.subscribe(
  			(data: any) => {
          this.barChartLabels = this.keywordMapping.keywords;
          this.barChartData = [{data: data.mapping, label: ""}];
        }
  		);
  	}

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
