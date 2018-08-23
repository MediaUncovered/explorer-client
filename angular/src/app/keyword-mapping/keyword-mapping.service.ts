import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeywordMapping } from './keyword-mapping.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class KeywordMappingService {

	constructor(private http: HttpClient) { }

	sendUserInput(keywordMapping: KeywordMapping){
		return this.http.post('http://localhost:5000/keywordMapping', keywordMapping)
	}

	// getKeywordMapping() {
	// 	return this.http.get<int>('http://localhost:5000/keywordMapping');
	// }

}