import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelInfo } from './model-info.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class ModelInfoService {

	constructor(private http: HttpClient) { }

	getModelInfo() {
		  return this.http.get<ModelInfo>(environment.API_URL + 'modelInfo');
	}

}
