import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ModelInfo } from './model-info.interface';
import { CollectionInfo } from './collection-info.interface';
import { Reliability } from './reliability.interface';

@Injectable()
export class InfoService{

	constructor(private http: HttpClient) { }

	getModelInfo() {
		return this.http.get<ModelInfo>(environment.API_URL + 'modelInfo');
	}

	getCollectionInfo() {
		return this.http.get<CollectionInfo>(environment.API_URL + 'info');
	}

	getReliability(): Observable<Reliability[]> {
		const url = environment.API_URL + 'reliability';
		return this.http.get<Reliability[]>(url);
	}
}
