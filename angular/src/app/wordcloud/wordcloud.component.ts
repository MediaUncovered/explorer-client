import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { CorrelationService } from '../data/correlation.service'


@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.css']
})

export class WordcloudComponent implements OnInit {

  errorMessage: string = 'WARNING: This word is not included in the model.'
  data: CloudData[] = [];

	options: CloudOptions = {  
    width : 800,
    height : 400,
    overflow: false,
  };

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3, 
    transitionTime: 0.8, 
    delay: 0.3
  };
 
  constructor(private correlationService: CorrelationService) { }

  ngOnInit() {
    this.correlationService.correlations$.
    subscribe(correlations => {
      const newData = [];
      for (let correlation of correlations){
        newData.push({text: correlation.label, weight: correlation.value});
      }
      this.data = newData;
    })
  }

}
