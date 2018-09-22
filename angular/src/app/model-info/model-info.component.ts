import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ModelInfo } from './model-info.interface';
import { environment } from '../../environments/environment';

import { ModelInfoService } from './model-info.service';

@Component({
  selector: 'app-model-info',
  templateUrl: './model-info.component.html',
  styleUrls: ['./model-info.component.css']
})

export class ModelInfoComponent implements OnInit{

	modelInfo: ModelInfo;

	constructor(private service: ModelInfoService) {}
	
    ngOnInit() {
		this.service.getModelInfo()
		.subscribe(
			  (data: ModelInfo) => this.modelInfo = {...data},
        (error) => console.log(error)
		)
	}

}
