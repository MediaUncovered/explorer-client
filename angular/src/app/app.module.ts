import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng4-charts/ng4-charts';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { CorrelationService } from './data/correlation.service';
import { KeywordMappingService } from './keyword-mapping/keyword-mapping.service';
import { AnalogyService } from './data/analogy.service';
import { InfoService } from './info/data/info.service';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { InfoNavigationComponent } from './info/info-navigation.component';
import { CollectionInfoComponent } from './info/collection-info/collection-info.component';
import { ModelInfoComponent } from './info/model-info/model-info.component';
import { ReliabilityComponent } from './info/reliability/reliability.component';
import { ExploreComponent } from './explore/explore.component';
import { ManualComponent } from './manual/manual.component';
import { AboutComponent } from './about/about.component';
import { KeywordMappingComponent } from './keyword-mapping/keyword-mapping.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { AnalogiesComponent } from './analogies/analogies.component';
import { ModelSelectionComponent } from './model-selection/model-selection.component';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'about', component: AboutComponent },
  { path: 'explore', component: ExploreComponent,
		children: [
			{path: '', redirectTo: '/explore/(info:collection)', pathMatch: 'full'},
			{path: 'model', component: ModelInfoComponent, outlet:'info'},
			{path: 'collection', component: CollectionInfoComponent, outlet:'info'},
			{path: 'reliability', component: ReliabilityComponent, outlet:'info'},
		]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  declarations: [
		AppComponent,
    HomeComponent,
    CollectionInfoComponent,
    ExploreComponent,
    ManualComponent,
    AboutComponent,
    KeywordMappingComponent,
    NavigationComponent,
    WordcloudComponent,
    AnalogiesComponent,
		ModelSelectionComponent,
		ModelInfoComponent,
    DropdownDirective,
    ReliabilityComponent,
		InfoNavigationComponent,
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
    KeywordMappingService,
		AnalogyService,
		InfoService,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
