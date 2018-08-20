import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {ChartsModule} from 'ng2-charts';

import {CorrelationService} from './data/correlation.service';
import {InfoService} from './info/info.service'
import {CorrelationGraphComponent} from './correlation-graph/correlation-graph.component';

import {AppComponent} from './app.component';
import { TestsComponent } from './tests/tests.component';
import {TestComponent} from './test/test.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CorrelationGraphComponent,
    TestsComponent,
    TestComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CorrelationService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
