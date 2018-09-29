import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CollectionInfoComponent } from './collection-info.component';
import { InfoService } from '../data/info.service';

describe('Component: Collection Info', () => {

	let infoComponent: CollectionInfoComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CollectionInfoComponent],
			imports: [HttpClientTestingModule],
			providers: [InfoService],
		}).compileComponents();
		const fixture = TestBed.createComponent(CollectionInfoComponent);
		infoComponent = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(infoComponent).toBeTruthy();
	});

});
