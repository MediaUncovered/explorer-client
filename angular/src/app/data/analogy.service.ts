import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordPair } from '../data/wordpair.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class AnalogyService{

	constructor(private http:HttpClient) { }

	getAnalogies(wordpair: WordPair){
		const url = environment.API_URL + 'analogies';
		return this.http.post(url, wordpair)
	}
}