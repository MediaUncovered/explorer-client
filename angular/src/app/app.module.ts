import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {ChartsModule} from 'ng2-charts';

import {CorrelationService} from './data/correlation.service';
import {CorrelationGraphComponent} from './correlation-graph/correlation-graph.component';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CorrelationGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [CorrelationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
