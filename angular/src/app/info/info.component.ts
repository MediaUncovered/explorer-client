//import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
//import {Observable} from 'rxjs';
//import {catchError} from 'rxjs/operators';
import { Component } from '@angular/core';
import {API_URL} from '../env';

import { InfoService } from './info.service';
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

	constructor(private infoService: InfoService) {}
	onGet() {
		this.infoService.getCollectionInfo()
		.subscribe(
			(response) => console.log(response),
			(error) => console.log(error)
		);
	}

}