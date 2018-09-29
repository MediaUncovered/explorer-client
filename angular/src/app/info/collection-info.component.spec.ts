import { TestBed, async, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CollectionInfoComponent } from './collection-info.component';
import { InfoService } from './info.service';

describe('Component: Collection Info', () => {

	let infoComponent: CollectionInfoComponent;

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
