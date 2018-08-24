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
    this.keywordMapping.keywordString = 'keywords';
    this.keywordMapping.left = 'left-axis';
    this.keywordMapping.right = 'right-axis';
  }

  onGetMapping() {
    this.keywordMapping.keywords = this.keywordMapping.keywordString.split(',');
  	this.mappingService.getKeywordMapping(this.keywordMapping)
  		.subscribe(
  			(data: any) => {
          this.barChartLabels.length = data.mapping.length;
          this.barChartData = [{data: data.mapping, label: ""}]; 
        }
  		);
    console.log(this.keywordMapping.keywords);
  	}

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
