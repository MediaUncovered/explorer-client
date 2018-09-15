import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InfoComponent } from './info.component';
import { InfoService } from './info.service';

describe('Component: Info', () => {

	let infoComponent: InfoComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [InfoComponent],
			imports: [HttpClientTestingModule],
			providers: [InfoService],
		}).compileComponents();
		const fixture = TestBed.createComponent(InfoComponent);
		infoComponent = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(infoComponent).toBeTruthy();
	});

});