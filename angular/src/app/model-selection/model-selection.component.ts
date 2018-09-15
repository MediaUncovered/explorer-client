import { Component, OnInit } from '@angular/core';
//import { DropdownModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-model-selection',
  templateUrl: './model-selection.component.html',
  styleUrls: ['./model-selection.component.css']
})
export class ModelSelectionComponent implements OnInit {

	open: boolean;

	constructor() { }

	ngOnInit() {
		this.open = false;
	}

	changeStatus(){
		if (this.open ==true) {
			this.open = false;
		}
		else {
			this.open = false;
		}
	}

}
