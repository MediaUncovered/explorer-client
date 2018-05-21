import { Component, OnInit } from '@angular/core';
import { Correlation } from './data/correlation';
import { CorrelationService } from './data/correlation.service'

@Component({
  selector: 'correlation-list',
  templateUrl: './correlation.list.component.html',
  styleUrls: ['./correlation.list.component.css']
})
export class CorrelationListComponent implements OnInit {

  correlations: Correlation[];

  constructor(private correlationService: CorrelationService) { }

  ngOnInit() {
    this.getCorrelations();
  }

  getCorrelations(): void {
    this.correlationService.getCorrelations()
      .subscribe(correlations => this.correlations = correlations)
  }

}
