import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeywordMapping } from './keyword-mapping.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class KeywordMappingService {

	constructor(private http: HttpClient) { }

	getKeywordMapping(keywordMapping: KeywordMapping){
		const url = environment.API_URL + 'keywordMapping';
		return this.http.post(url, keywordMapping)
	}
}