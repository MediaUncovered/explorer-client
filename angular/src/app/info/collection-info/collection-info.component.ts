import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { CollectionInfo } from '../data/collection-info.interface';
import { environment } from '../../../environments/environment';

import { InfoService } from '../data/info.service';

@Component({
  selector: 'app-collection-info',
  templateUrl: './collection-info.component.html',
  styleUrls: ['./collection-info.component.css']
})

export class CollectionInfoComponent implements OnInit{

	collectionInfo: CollectionInfo;

	constructor(private infoService: InfoService) {}
	
	ngOnInit() {
		this.getCollectionInfo();
	}

	getCollectionInfo() {
		this.infoService.getCollectionInfo()
		.subscribe(
			(data: CollectionInfo) => this.collectionInfo = {...data},
			(error) => console.log(error)
		)
	}

}
