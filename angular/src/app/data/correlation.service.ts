import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Correlation } from './correlation';

export const CORRELATIONS: Correlation[] = [
  { value: 12.4, label: 'Yellow' },
  { value: 10.9, label: 'Blue' },
  { value: 5.3, label: 'White' },
  { value: 3.3, label: 'Red' },
  { value: 1, label: 'Green' },
  { value: -3, label: 'Purple' },
  { value: -8.1, label: 'Magenta' },
  { value: -15, label: 'Pink' },
  { value: -23, label: 'Black' },
];

@Injectable({
  providedIn: 'root',
})
export class CorrelationService {

  constructor() { }

  getCorrelations(): Observable<Correlation[]> {
    return of(CORRELATIONS);
  }

}
