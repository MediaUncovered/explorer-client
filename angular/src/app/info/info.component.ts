//import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
//import {Observable} from 'rxjs';
//import {catchError} from 'rxjs/operators';
import { Component } from '@angular/core';
import {API_URL} from '../env';
//import {Info} from './info.model';
//import {throwError as throw} from 'rxjs';

//@Injectable()
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent{

	modelName: string;

	constructor(private http: HttpClient){

	}

	//private static _handleError(err: HttpErrorResponse | any){
	//	return Observable.throw(err.message || 'Error: Unable to complete request.');
	//}


	//getInfo(): Observable<Info> {
	ngOnInit(){
		this.http.get("http://localhost:5000/info").subscribe(data => {
			this.modelName = data as string;
			console.log(this.modelName);
		})
		//.catchError(InfoService._handleError);
	}

	//ngOnInit(){
	//}

}