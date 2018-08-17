import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoService {
	constructor(private http: HttpClient) { }

	getCollectionInfo() {
		return this.http.get('http://localhost:5000/info');
	}

}