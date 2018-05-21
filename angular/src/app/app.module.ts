import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CorrelationService } from './data/correlation.service'
import { CorrelationListComponent } from './correlation.list.component'

@NgModule({
  declarations: [
    AppComponent,
    CorrelationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CorrelationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
