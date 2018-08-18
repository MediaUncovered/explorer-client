import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollectionInfo } from './info.model';
//import { map } from 'rxjs/operators';

@Injectable()
export class InfoService {

	constructor(private http: HttpClient) { }

	getCollectionInfo() {
		return this.http.get<CollectionInfo>('http://localhost:5000/info');
	}

}