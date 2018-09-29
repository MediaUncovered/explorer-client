import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ModelInfo } from '../data/model-info.interface';
import { environment } from '../../../environments/environment';

import { InfoService } from '../data/info.service';

@Component({
  selector: 'app-model-info',
  templateUrl: './model-info.component.html',
  styleUrls: ['./model-info.component.css']
})

export class ModelInfoComponent implements OnInit{

	modelInfo: ModelInfo = {type: '', method: '', min_freq: 0, context_window: 0, epochs: 0};
	hasInfo: boolean = false;

	constructor(private service: InfoService) {}
	
  ngOnInit() {
		this.getModelInfo()
	}

	getModelInfo(){
		this.service.getModelInfo()
		.subscribe(
			  (data: ModelInfo) => this.modelInfo = {...data},
        (error) => console.log(error)
		)
		this.hasInfo = true;
	}

}
