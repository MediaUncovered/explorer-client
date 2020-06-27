import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ModelSelectionService {

	constructor(private http: HttpClient){}

	setModel(model: string){
		const url = environment.API_URL + 'selectModel';
		return this.http.post(url, {'model_name': model});
	}

	getAllModels() {
		const url = environment.API_URL + 'models';
		return this.http.get<string[]>(url);
	}
}
