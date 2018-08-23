import { Component, OnInit } from '@angular/core';
import { KeywordMapping } from './keyword-mapping.interface';
import { KeywordMappingService } from './keyword-mapping.service';

@Component({
  selector: 'app-keyword-mapping',
  templateUrl: './keyword-mapping.component.html',
  styleUrls: ['./keyword-mapping.component.css']
})

export class KeywordMappingComponent implements OnInit {

  keywordMapping: KeywordMapping = new KeywordMapping();

  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    {data: []}
  ];
  public barChartLabels: string[] = [''];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
  	responsive: true
  };

  constructor(private mappingService: KeywordMappingService) {
    //this.keywordMapping = new KeywordMapping();

  }

  ngOnInit() {
    this.keywordMapping.keywords = 'keywords';
    this.keywordMapping.left = 'left-axis';
    this.keywordMapping.right = 'right-axis';
    this.keywordMapping.mapping = [];

    //this.barChartLabels.push = 'test';
    //var values = [];
    this.barChartData = [{data: [4], label: "test"}];

  }


  onGetMapping() {
  	console.log(this.keywordMapping.keywords);
  	console.log(this.keywordMapping.left);

  	this.mappingService.sendUserInput(this.keywordMapping)
  		.subscribe(
  			(data: any) => this.keywordMapping.mapping = data.mapping,
  			(error) => console.log(error)
  		);
    this.barChartData = [{data: this.keywordMapping.mapping, label: this.keywordMapping.keywords}]

  	console.log(this.keywordMapping.mapping);
  	
  	}

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  	//this.mappingService.getKeywordMapping()
  	//	.subscribe(
  	//		(data: int) => this.value = {...data},
  	//		(error) => console.log(error)
  	//	)

}
