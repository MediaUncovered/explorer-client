import { Component } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html'
})

export class TestComponent {
	serverID: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus;
	}
	
}