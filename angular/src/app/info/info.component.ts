import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Component } from '@angular/core';
import { API_URL } from '../env';
import { CollectionInfo } from './info.interface';

import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent{

	collectionInfo: CollectionInfo;
	hasInfo = false;

	constructor(private infoService: InfoService) {}
	
	onGet() {
		this.infoService.getCollectionInfo()
		.subscribe(
			(data: CollectionInfo) => this.collectionInfo = {...data},
			(error) => console.log(error)
		)
		this.hasInfo = true;
	}

}