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
import { HomeComponent} from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ExploreComponent } from './explore/explore.component';
import { ManualComponent } from './manual/manual.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent},
  { path: 'manual', component: ManualComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CorrelationGraphComponent,
    TestsComponent,
    HomeComponent,
    InfoComponent,
    ExploreComponent,
    ManualComponent,
    AboutComponent
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
