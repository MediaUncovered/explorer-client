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

	ngOnInit() {}

	getReliabilities(): void {
		this.service.getReliability()
			.subscribe(data => this.accuracies = data);
		this.log();
	}

	getFakeReliabilities(): void{
		this.accuracies = [{section:'f', n_correct:1, n_total:1}, {section:'s', n_correct:2, n_total:2}];
		this.log();
	}

	log(): void {
		console.log(this.accuracies)
		console.log(this.accuracies.length)
		for (let accuracy of this.accuracies) {
			console.log(accuracy.section);
		}
	}

}
