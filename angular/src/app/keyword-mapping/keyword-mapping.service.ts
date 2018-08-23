import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeywordMapping } from './keyword-mapping.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class KeywordMappingService {

	constructor(private http: HttpClient) { }

	getKeywordMapping(keywordMapping: KeywordMapping){
		const url = 'http://localhost:5000/keywordMapping';
		return this.http.post(url, keywordMapping)
	}
}