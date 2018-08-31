import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Component } from '@angular/core';
import { CollectionInfo } from './info.interface';
import { environment } from '../../environments/environment';

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
	
	onGetInfo() {
		this.infoService.getCollectionInfo()
		.subscribe(
			(data: CollectionInfo) => this.collectionInfo = {...data},
			(error) => console.log(error)
		)
		this.hasInfo = true;
	}

}