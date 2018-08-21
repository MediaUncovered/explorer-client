import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	serverID: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus;
	}
	
}