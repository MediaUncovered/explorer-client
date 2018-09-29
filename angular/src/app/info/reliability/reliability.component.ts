import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Reliability } from '../data/reliability.interface';
import { environment } from '../../../environments/environment';

import { InfoService } from '../data/info.service';

@Component({
  selector: 'app-reliability',
  templateUrl: './reliability.component.html',
  styleUrls: ['./reliability.component.css']
})

export class ReliabilityComponent implements OnInit{

	accuracies: Reliability[] = [];

	constructor(private service: InfoService) {}

	ngOnInit() {
		this.getReliabilities()
	}

	getReliabilities(): void {
		this.service.getReliability()
			.subscribe(data => this.accuracies = data);
	}

}
