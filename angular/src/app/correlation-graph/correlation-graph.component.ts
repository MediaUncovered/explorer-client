import { Component, OnInit } from '@angular/core';
import { Correlation } from '../data/correlation';
import { CorrelationService } from '../data/correlation.service'

@Component({
  selector: 'app-correlation-graph',
  templateUrl: './correlation-graph.component.html',
  styleUrls: ['./correlation-graph.component.css']
})
export class CorrelationGraphComponent implements OnInit {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: []}
  ];

  errorMessage: string = 'WARNING: This word is not included in the model.'

  constructor(private correlationService: CorrelationService) { }

  ngOnInit() {
    this.correlationService.correlations$
      .subscribe(correlations => {
        console.log("correlations", correlations);
        var labels = [];
        var values = [];
        this.barChartLabels.length = 0;
        for (let correlation of correlations){
          this.barChartLabels.push(correlation.label);
          values.push(correlation.value);
        }
        this.barChartData = [ {data: values, label: ""} ];
        }
      )
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
