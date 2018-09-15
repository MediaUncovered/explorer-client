import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng4-charts/ng4-charts';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { CorrelationService } from './data/correlation.service';
import { KeywordMappingService } from './keyword-mapping/keyword-mapping.service';
import { InfoService } from './info/info.service';
import { AnalogyService } from './data/analogy.service';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { InfoComponent } from './info/info.component';
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
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent},
  { path: 'manual', component: ManualComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ExploreComponent,
    ManualComponent,
    AboutComponent,
    KeywordMappingComponent,
    NavigationComponent,
    WordcloudComponent,
    AnalogiesComponent,
    ModelSelectionComponent,
    DropdownDirective
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
    KeywordMappingService,
    AnalogyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
