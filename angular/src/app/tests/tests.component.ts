import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Enter server name';
  serverCreated = false;

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true
  	}, 5000);
  	}

  ngOnInit() {
  }

  onClick(){
    this.serverCreated = true;
  	this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }


}

