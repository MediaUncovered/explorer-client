import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { CorrelationService } from './data/correlation.service';
import { CorrelationListComponent } from './correlation.list.component';
import { CorrelationGraphComponent } from './correlation-graph/correlation-graph.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CorrelationListComponent,
    CorrelationGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [CorrelationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
