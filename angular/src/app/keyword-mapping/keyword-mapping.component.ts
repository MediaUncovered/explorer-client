import { Component, OnInit } from '@angular/core';
import { KeywordMapping } from './keyword-mapping.interface';
import { UserInput } from './user-input.interface';
import { KeywordMappingService } from './keyword-mapping.service';

@Component({
  selector: 'app-keyword-mapping',
  templateUrl: './keyword-mapping.component.html',
  styleUrls: ['./keyword-mapping.component.css']
})

export class KeywordMappingComponent implements OnInit {

	userInput: UserInput = new UserInput('', '', '');
  keywordMapping: KeywordMapping = new KeywordMapping();
  errorMessage: string = 'WARNING: at least one of your input words is not included in the model.';
  showError = false;

  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [
    {data: []}
  ];
  public barChartLabels: string[] = [];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
  	responsive: true,
  };

  constructor(private mappingService: KeywordMappingService) {
  }

  ngOnInit() {
		this.barChartLabels.length = 1;
  }

  stringToArray(input){
    var words = input.split(',');
    return words.map(x => x.trim())
  }

  transformInput(){
    this.keywordMapping.keywords = this.stringToArray(this.userInput.keywordString);
    this.keywordMapping.left = this.stringToArray(this.userInput.leftString);
    this.keywordMapping.right = this.stringToArray(this.userInput.rightString);
  }

  onGetMapping() {
    this.transformInput();
  	this.mappingService.getKeywordMapping(this.keywordMapping)
  		.subscribe(
				(data: any) => {
          this.barChartLabels = data.keywords;
          this.barChartData = [{data: data.mapping, label: ""}];
          if (data.oov && data.oov.length > 0){
            this.errorMessage= 'WARNING: The following words are not in the model: ' + data.oov.toString();
            this.showError = true;
          }
          else{
          this.showError = false;
          }
        },
        error => {
          console.log('Mapping Service ERROR:', error);
          this.showError = true;
        },
  		);
  	}

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  onGetGenderMapping(){
    this.userInput.keywordString = 'secretary, professor, politician, nurse, pilot, teacher, finance, technology, family, business';
    this.userInput.leftString = 'she, woman';
    this.userInput.rightString = 'he, man';
    this.onGetMapping()
  }

  onGetPoliticsMapping(){
    this.userInput.keywordString = 'health, social, education, immigration, gender, gun';
    this.userInput.leftString = 'democrats';
    this.userInput.rightString = 'conservative';
    this.onGetMapping()
  }


  onGetPreferencesMapping(){
    this.userInput.keywordString = 'wealth, war, repression, freedom, immigration, economy, peace, justice, equality';
    this.userInput.leftString = 'good, positive';
    this.userInput.rightString = 'bad, negative';
    this.onGetMapping()
  }

  onGetGeschlechterMapping(){
    this.userInput.keywordString = 'kunst, kultur,  sozialwissenschaft, technik, logik, professor, doktor, arbeit, hausarbeit, famili, sensibel, aggressiv, fussball, volleyball';
    this.userInput.leftString = 'frau, weiblich';
    this.userInput.rightString = 'mann, mannlich';
    this.onGetMapping()
  }


  onGetPolitikerMapping(){
    this.userInput.keywordString = 'gysi, wagenknecht, kipping, baerbock, esk, nahl, merkel, spahn, seehof, lindn, weidel, hock, gauland';
    this.userInput.rightString = 'link, linksextrem, linksradikal';
    this.userInput.leftString = 'recht, rechtsextrem, rechtsradikal';
    this.onGetMapping()
  }

  onGetThemenMapping(){
    this.userInput.keywordString = 'sozial, gerecht, kinderarmut, rent, famili, gesundheit, kultur, bildung,  forschung, digital, kohlekraft, umweltschutz, klima, wirtschaft, lobbyregist, finanz, heimat, europa, immigration, religion, angst, freiheit, solidaritat, offen, sicher';
    this.userInput.rightString = 'link, linksextrem, linksradikal';
    this.userInput.leftString = 'recht, rechtsextrem, rechtsradikal';
    this.onGetMapping()
  }

  onGetWerteMapping(){
    this.userInput.keywordString = 'repression, nationalismus, islamismus, terrorismus, krieg, korruption, gewalt, freiheit, gleichheit, famili, wirtschaft, kultur, fried, europa';
    this.userInput.rightString = 'gut, positiv';
    this.userInput.leftString = 'schlecht, negativ';
    this.onGetMapping()
  }

  reset(){
    this.userInput.keywordString = '';
    this.userInput.leftString = '';
    this.userInput.rightString = '';
  }

}
