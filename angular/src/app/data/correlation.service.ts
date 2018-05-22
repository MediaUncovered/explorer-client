import { Injectable , Output, EventEmitter} from '@angular/core';

import { Observable, of, Subject } from 'rxjs';

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

  private correlationsSource = new Subject<Correlation[]>();
  correlations$ = this.correlationsSource.asObservable();

  constructor() { }

  update(word: string): void {
    var correlations: Correlation[] = [];
    for( let correlation of CORRELATIONS) {
      correlations.push(
        {
          value: -20 + Math.random() * 40,
          label: correlation.label
        }
      )
    }
    correlations.sort(
      (a, b) => {
        if (a.value > b.value) {
            return -1;
        }

        if (a.value < b.value) {
            return 1;
        }

        return 0;
      }
    )
    this.correlationsSource.next(correlations);
  }

  getCorrelations(): Observable<Correlation[]> {
    return of(CORRELATIONS);
  }

}
