import { Component, OnInit } from '@angular/core';
import { ModelSelectionService } from './model-selection.service';

@Component({
  selector: 'app-model-selection',
  templateUrl: './model-selection.component.html',
  styleUrls: ['./model-selection.component.css']
})
export class ModelSelectionComponent implements OnInit{

	models:  string[] = [];

	constructor(private modelService: ModelSelectionService) { }

	ngOnInit(){
		this.modelService.getAllModels().
			subscribe(data => {this.models = data});
	}

	setModel(model: string) {
		this.modelService.setModel(model).subscribe(data => console.log(data));
	}



}
