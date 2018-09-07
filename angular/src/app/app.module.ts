import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng4-charts/ng4-charts';
import { TagCloudModule } from 'angular-tag-cloud-module';

import {CorrelationService} from './data/correlation.service';
import {KeywordMappingService} from './keyword-mapping/keyword-mapping.service';
import {InfoService} from './info/info.service'
import {CorrelationGraphComponent} from './correlation-graph/correlation-graph.component';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ExploreComponent } from './explore/explore.component';
import { ManualComponent } from './manual/manual.component';
import { AboutComponent } from './about/about.component';
import { KeywordMappingComponent } from './keyword-mapping/keyword-mapping.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';

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
    HomeComponent,
    InfoComponent,
    ExploreComponent,
    ManualComponent,
    AboutComponent,
    KeywordMappingComponent,
    NavigationComponent,
    WordcloudComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TagCloudModule
  ],
  providers: [
    CorrelationService,
    InfoService,
    KeywordMappingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
